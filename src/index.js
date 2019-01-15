import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar/index';
import About from './components/About/index';
import App from './App'
// ReactDOM.render(<Navbar />, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));


serviceWorker.unregister();
