const passport = require('passport');
const User = require('../models/User');
const settings = require('./settings');
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// const LocalStrategy = require('passport-local').Strategy;

let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: settings.secret
};

passport.use(new jwtStrategy(opts, function(jwt_payload, done) {
  User.findOne({ _id: jwt_payload._id }, function(err, user) {
    if (err) {
      return done(err, false)
    }
    if (user) {
      return done(err, user);
    } else {
      return done(err, false);
      // or you could create a new account
    }
  })
}))

// Local strategy
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     })
//   }
// ));

passport.serializeUser(function(user, cb) {
  cb(null, user);
})

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
})

module.exports = passport;