import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scroll.css';
import './color.css';
import reportWebVitals from './reportWebVitals';

// components
import Header from './components/header-folder/header'
import Body from './components/body-folder/body'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
