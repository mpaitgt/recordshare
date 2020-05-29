import axios from 'axios';

export default {
  uploadImage: function(img) {
    return axios.post('/api/upload', img);
  },
  addAlbum: function(obj) {
    return axios.post(`/api/user/add-album`, obj);
  },
  getAlbums: function() {
    return axios.get(`/api/get-albums`);
  }
}