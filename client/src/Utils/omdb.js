import axios from 'axios';

export default {
  getMovies: function(search) {
    return axios.get(`/api/movies/${search}`,
      {headers: 
        {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}