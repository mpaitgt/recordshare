import axios from 'axios';

export default {
  userRegister: function(obj) {
    // sending new user object
    return axios.post('/auth/register', obj, function(req, res) {
      if (res.status === 200) {
        console.log('success!');
      }
    })
  },
  userLogin: function(obj) {
    return axios.post('/auth/login', obj)
      .then(res => console.log(res));
  }
}