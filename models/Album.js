const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true
  },
  image: {
    type: Object,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    max: 10
  },
  date_added: {
    type: Date,
    default: Date.now
  },
  genres: {
    type: Array,
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }],
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Album', AlbumSchema);