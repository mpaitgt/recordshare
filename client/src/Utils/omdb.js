import axios from 'axios';

export default {
  getMovieByTerm: function(search) {
    return axios.get(`/api/movies/search/${search}`,
      {headers: 
        {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        }
      }
    );
  },
  getMovieById: function(id) {
    return axios.get(`/api/movies/id/${id}`)
  }
}