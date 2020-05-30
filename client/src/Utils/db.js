import axios from 'axios';

export default {
  uploadImage: function(img) {
    return axios.post('/api/upload', img);
  },
  addAlbum: function(obj) {
    let formData = new FormData();
    for (let key in obj) {
      formData.append(key, obj[key]);
    }
    return fetch(`/api/user/add-album`, { method: 'POST', body: formData });
  },
  getAlbums: function() {
    return axios.get(`/api/get-albums`);
  }
}