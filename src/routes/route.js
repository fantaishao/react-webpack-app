import React, {Component} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import App from './containers/app';
import Login from './containers/login';
import Login from './containers/home';


export default class ReactRouter expends Component {
  render() {
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Login}>
        </Route>
        <Route path="home" component={Home}></Route>
      </Route>
    </Router>
  };
};
