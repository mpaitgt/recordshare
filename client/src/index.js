import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './Components/Providers/UserProvider';
import { PayloadProvider } from './Components/Providers/PayloadProvider';

ReactDOM.render(
  <UserProvider>
    <PayloadProvider>
      <App />
    </PayloadProvider>
  </UserProvider>, 
  document.getElementById('root')
);