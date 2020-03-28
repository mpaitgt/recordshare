import axios from 'axios';
export default {
  getArtists: function(artist) {
    return axios.get(`/api/music/artists/query/${artist}`);
  },
  getArtistById: function(id) {
    return axios.get(`/api/music/artists/id/${id}`);
  }
}