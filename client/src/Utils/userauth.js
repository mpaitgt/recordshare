import axios from 'axios';

export default {
  userRegister: function(obj) {
    // sending new user object
    return axios.post('/users/register', obj, function(req, res) {
      if (res.status === 200) {
        console.log('success!');
      }
    })
  },
}