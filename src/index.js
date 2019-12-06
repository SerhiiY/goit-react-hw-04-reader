import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { HashRouter as Router } from 'react-router-dom';
import './style.css'

ReactDOM.render(
  <Router basename='/'>
    <App />
  </Router>
  , document.getElementById('root'));