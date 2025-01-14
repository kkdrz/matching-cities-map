import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from "./Footer";
import Modal from "./Modal";
import ReactGA from "react-ga";

ReactGA.initialize('G-ZXMPLSG5ND');

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer></Footer>
    <Modal></Modal>
  </React.StrictMode>,
  document.getElementById('root')
);


