import axios from 'axios';
export default {
  getAlbums: function(album) {
    return axios.get(`/api/music/albums/query/${album}`);
  },
  getAlbumTracks: function(id) {
    return axios.get(`/api/music/albums/id/${id}`);
  }
}