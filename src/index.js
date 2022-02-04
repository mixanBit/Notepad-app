import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './scroll.css';
import './color.css';

// components
import Authorization from './components/authorization-folder/authorization'
import Header from './components/header-folder/header'
import Body from './components/body-folder/body'

ReactDOM.render(
  <React.StrictMode>
    <Authorization />
    <Header />
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
