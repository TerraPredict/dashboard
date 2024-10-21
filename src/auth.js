const { auth } = require('express-openid-connect');
const config = require('./config');

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: config.auth0ClientSecret,
  baseURL: config.auth0Callback,
  clientID: config.auth0ClientId,
  issuerBaseURL: `https://${config.auth0Domain}`
};

module.exports = auth(authConfig);