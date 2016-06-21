require('dotenv').load();

var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = function(event, context, callback) {
  stripe.products.list({ active: true }, function(err, products) {
    if (err) {
      callback(err);
    } else {
      callback(null, { products: products.data });
    }
  });
}
