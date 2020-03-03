require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy({
    clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect'
  }, () => {

  })
)

passport.serializeUser(function(user, done) {
  done(null, user);
 });
 
passport.deserializeUser(function(user, done) {
done(null, user);
});

module.exports = passport;