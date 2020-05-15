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
    type: String,
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
  genres: [{
    type: Array,
    required: true
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }],
  backs: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Album', AlbumSchema);