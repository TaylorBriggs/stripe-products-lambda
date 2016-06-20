require('dotenv').load();

var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
var handler = require('../index').handler;

var context = {
  fail: function(err) {
    console.error('Filed: ', err);
  },

  succeed: function(response) {
    console.log('Success: ', response);
  }
};

return handler({}, context);
