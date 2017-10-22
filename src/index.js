import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app/App';
import Courses from './components/courses/Courses';
import Links from './components/links/Links';
import Games from './components/games/Games';
import NotFound from './containers/notFoutd/NotFound';



ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={App} />
  <Route path="/links" component={Links} />
  <Route path="/games" component={Games} />
  <Route path="*" component={NotFound} />
</Router>
, 
  document.getElementById('root'));
registerServiceWorker();
