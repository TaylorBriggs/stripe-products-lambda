require('dotenv').load();

var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = function(event, context) {
  stripe.products.list({ active: true }, function(err, products) {
    if (err) {
      context.fail(err);
    } else {
      context.succeed({ products: products.data });
    }
  });
}
