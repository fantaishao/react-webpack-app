import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, Link, hashHistory,browserHistory,Lifecycle} from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import App from '../containers/app';
import Login from '../components/login';
import Home from '../components/home';


export default class ReactRouter extends Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  //缓存里如果没有找到用户名，返回登录界面
  logIn() {
    if(sessionStorage.getItem('username') == undefind) {
      browserHistory.push('/login');
    }
  }
  //退出时清楚session
  logOut() {
    sessionStorage.clear();
  }
  render() {
    return (
      <div>
        <Router>
          <Route path="/login" component={Login} onEnter={this.logOut}>
          </Route>
          <Route path="/" component={Home} onEnter= {this.logIn}>
          </Route>
        </Router>
      </div>
    )
  };
};
