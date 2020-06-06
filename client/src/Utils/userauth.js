export default {
  userLogin: function(obj) {
    const config = {
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'access-control-allow-origin': '*', 
        'accept': 'application/json' 
      },
      method: "POST",
      body: JSON.stringify(obj)
    }
    return fetch('/auth/login', config);
  },
  userRegister: function(obj) {
    const config = {
      headers: { 'content-type': 'application/json' },
      method: "POST",
      body: JSON.stringify(obj)
    }
    return fetch('/auth/register', config);
  },
  populateLocalStorage: function(userData) {
    localStorage.setItem('jwtToken', userData.token);
    localStorage.setItem('user', JSON.stringify(userData.user));
  }
};