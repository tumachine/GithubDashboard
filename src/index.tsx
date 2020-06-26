import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

console.log(process.env);

ReactDOM.render((
  <BrowserRouter basename='/GithubDashboard'>
  {/* <BrowserRouter> */}
      <App/>
  </BrowserRouter>
  ), document.getElementById('root')
)