export default {
  // login the user
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
  // register a new user
  userRegister: function(obj) {
    const config = {
      headers: { 'content-type': 'application/json' },
      method: "POST",
      body: JSON.stringify(obj)
    }
    return fetch('/auth/register', config);
  },
  // logout the user
  userLogout: function() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    window.location.reload();
  },
  // after login submission, populate storage with user and jwt
  populateLocalStorage: function(userData) {
    localStorage.setItem('jwtToken', userData.token);
    localStorage.setItem('user', JSON.stringify(userData.user));
  },
  // get the user object from local storage, set state of application
  getLocalStorage: function(key) {
		return localStorage.getItem(key);
	}
};