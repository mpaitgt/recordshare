const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  note: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Comment', CommentSchema);