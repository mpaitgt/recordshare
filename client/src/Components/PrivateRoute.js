import React from 'react';
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';

const Public = () => <h3>Public Content</h3>;

const Private = () => <h3>Private Content</h3>;

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 300);
  },
  logout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 300);
  }
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route 
      {...rest}
      render={({ location }) => {
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect 
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    }
    />
  )
}

export default PrivateRoute;