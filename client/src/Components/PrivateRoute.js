import React, {useEffect, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import userauth from '../Utils/userauth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={props => 
        userauth.getLocalStorage('jwtToken') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to='/login'
          />
        )
      }
    />  
  )
}

export default PrivateRoute;