const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
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
})

module.exports = mongoose.model('User', UserSchema);