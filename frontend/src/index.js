import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Postfrombc from './Postfrombc';
import Getfrombc from './Getfrombc';
import Tabsone from './Tabsone';
import Gohome from './Gohome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Postfrombc/> */}
    {/* <Getfrombc/> */}
    <Tabsone/>
    {/* <Gohome/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
