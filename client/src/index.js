import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PayloadProvider } from './Components/Providers/PayloadProvider';

ReactDOM.render(
  <PayloadProvider>
    <App />
  </PayloadProvider>, 
  document.getElementById('root')
);