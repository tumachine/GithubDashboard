import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log(process.env);

ReactDOM.render((
  <BrowserRouter basename='/GithubDashboard'>
      <App/>
  </BrowserRouter>
  ), document.getElementById('root')
)