import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import "bulma/css/bulma.css";
import axios from "axios";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
