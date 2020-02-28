const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config();

// uses Google+ API to authenticate people
passport.use(
  new GoogleStrategy({
    // options for the strategy
    callbackURL: '/auth/google/redirect',
    clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET
  }, () => {
    // passport callback function
  })
)