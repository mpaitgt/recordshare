import axios from 'axios';

export default {
  addAlbum: function(obj) {
    return axios.post(`/api/user/add-album`, obj);
  },
  getAlbums: function() {
    return axios.get(`/api/get-albums`);
  }
}