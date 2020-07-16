import axios from 'axios';

export default {
  addAlbum: function(obj) {
    let formData = new FormData();
    for (let key in obj) {
      formData.append(key, obj[key]);
    }
    return fetch(`/api/user/add-album`, { method: 'POST', body: formData });
  },
  getAlbums: function() {
    return axios.get(`/api/get-albums`);
  },
  searchAlbums: function(query) {
    return axios.get(`/api/search/albums/${query}`);
  },
  likeAlbum: function(user, id) {
    return axios.post(`/api/like/album/${user}/${id}`);
  },
  filterGenres: function(term) {
    return axios.post(`/api/albums/genres/${term}`)
  },
  getImages: function() {
    return axios.get(`/api/get-images`);
  }
}