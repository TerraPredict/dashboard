require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0ClientId: process.env.AUTH0_CLIENT_ID,
  auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
  auth0Callback: process.env.AUTH0_CALLBACK_URL,
  sessionSecret: process.env.SESSION_SECRET || 'un_secreto_muy_seguro'
};