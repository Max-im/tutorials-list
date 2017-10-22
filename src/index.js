import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app/App';
import Courses from './components/courses/Courses';
import Links from './components/links/Links';
import Games from './components/games/Games';

import { Router, Route, hashHistory } from 'react-router';



ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={App} />
  <Route path="/links" component={Links} />
  <Route path="/games" component={Games} />
</Router>
, 
  document.getElementById('root'));
registerServiceWorker();
