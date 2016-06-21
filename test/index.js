require('dotenv').load();

var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
var handler = require('../index').handler;

var context = {};

function handleResponse(err, data) {
  if (err) {
    console.error('Failed: ', err);
  } else {
    console.log('Succeeded: ', data);
  }
}

return handler({}, context, handleResponse);
