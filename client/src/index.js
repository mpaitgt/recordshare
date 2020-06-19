import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './Components/Providers/UserProvider';
import { ResultsProvider } from './Components/Providers/ResultsProvider';

ReactDOM.render(
  <UserProvider>
    <ResultsProvider>
      <App />
    </ResultsProvider>
  </UserProvider>, 
  document.getElementById('root')
);