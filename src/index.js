// React loads Webpack, so import is legal
import React from 'react';
// React can be used for different outputs
// ReactDOM is for the web.
import ReactDOM from 'react-dom';
// Make app work faster offline
import * as serviceWorker from './serviceWorker';
// This import allows you to import style for each component
// .css is required
import './index.css';
// CSS Library
import 'tachyons';

import App from './containers/App';

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));

// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
