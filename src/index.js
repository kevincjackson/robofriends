// React loads Webpack, so import is legal
import React from 'react';

// React can be used for different outputs
// ReactDOM is for the web.
import ReactDOM from 'react-dom';

// This import allows you to import style for each component
// .css is required
import './index.css';

// Import a convenience library
import 'tachyons';

// Import robots array
import { robots } from './robots'

// Import Card
import Cardlist from './Cardlist';

// Make app work faster offline
import * as serviceWorker from './serviceWorker';

// Render the app
ReactDOM.render(
  <Cardlist robots={robots} />
  ,document.getElementById('root')
);

// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
