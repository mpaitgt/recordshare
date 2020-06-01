import axios from 'axios';

export default {
  googleLogin: function() {
    return fetch('/auth/google');
  }
}