import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Banner from './components/banner.js';
import Navbar from './components/navbar.js';
import './bootstrap.min.css';
import Cards from './components/cards';


ReactDOM.render(
  <React.StrictMode>
     <Navbar />
    <Banner />
    <Cards />
    <Cards />
    <Cards />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
