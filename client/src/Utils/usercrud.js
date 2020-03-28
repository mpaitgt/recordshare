import axios from 'axios';

export default {
  checkArtists: function(id) {
    axios.get(`/user/check/${id}`);
  },
  saveArtist: function(artistObj) {
    axios.post('/user/artist/create', artistObj);
  }
}