import axios from 'axios';
export default {
  getTracks: function(artist) {
    return axios.get(`/api/music/tracks/${artist}`);
  }
}