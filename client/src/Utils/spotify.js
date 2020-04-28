import axios from 'axios';
export default {
  getArtists: function(artist) {
    return axios.get(`/api/music/artists/query/${artist}`);
  },
  getAlbums: function(album) {
    return axios.get(`/api/music/albums/query/${album}`);
  },
  getTracks: function(track) {
    return axios.get(`/api/music/tracks/query/${track}`);
  },
  getArtistById: function(id) {
    return axios.get(`/api/music/artists/id/${id}`);
  }
}