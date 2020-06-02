import axios from 'axios';

export default {
  googleLogin: function() {
    return fetch('/auth/google');
  },
  userRegister: function(obj) {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify(obj)
    }
    return fetch('/auth/register', config);
  }
};