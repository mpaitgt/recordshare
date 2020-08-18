const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date_joined: {
    type: Date,
    default: Date.now
  },
  albums: [{
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }]
});

UserSchema.pre('save', function(next) {
  let user = this;

  // only hash the password if it's been modified or is new
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    // hash the password using the new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the salt
      user.password = hash;
      next();
    })
  })
})

UserSchema.methods.comparePassword = function(userPassword, cb) {
  bcrypt.compare(userPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  })
}

module.exports = mongoose.model('User', UserSchema);