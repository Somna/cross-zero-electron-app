import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

// application container
let application = window.application || {};

// auto auth from localStorage

// init application: get data from server, initialize current application state from localStorage
ReactDOM.render(<App application={application} />, document.getElementById('root'));
// registerServiceWorker();
