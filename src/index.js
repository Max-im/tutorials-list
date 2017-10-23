import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app/App';
import Courses from './components/courses/Courses';
import Links from './components/links/Links';
import Games from './components/games/Games';
import Single from './components/single/Single';
import NotFound from './containers/notFoutd/NotFound';



ReactDOM.render(
<Router history={hashHistory}>
  <Route  path="/" component={App}>
    <IndexRoute component={Courses} />
    <Route path="/games" component={Games} />
    <Route path="/links" component={Links} >
       <Route path=':category' component={Single} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
</Router>
, 
  document.getElementById('root'));
registerServiceWorker();
