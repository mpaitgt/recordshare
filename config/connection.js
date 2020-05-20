const mongoose = require('mongoose');
require('dotenv').config();
let pw = process.env.REACT_APP_MONGO_PW;
const uri = `mongodb+srv://mpaitgt:${pw}@cluster0-sx2g9.mongodb.net/recordshare?retryWrites=true&w=majority`;
const MONGODB_URI = process.env.MONGODB_URI || uri;

mongoose.Promise = require('bluebird');
mongoose.connect(MONGODB_URI, { 
  useUnifiedTopology: true, 
  useNewUrlParser: true,
  promiseLibrary: require('bluebird')
});

module.exports = mongoose;