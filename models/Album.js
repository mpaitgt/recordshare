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
  story: {
    type: String,
    required: true
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
  likes: {
    type: Number,
    default: 0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Album', AlbumSchema);