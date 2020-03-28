import axios from 'axios';

export default {
  checkTable: function() {
    
  },
  saveArtist: function(artistObj) {
    axios.post('/user/artist/create', artistObj);
  }
}