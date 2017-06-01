import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory,browserHistory,Lifecycle} from 'react-router';

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
        <Router history={browserHistory}>
          <Route path="/" component={App} onEnter={this.logOut}>
            <IndexRoute component={Home} />
            <Route path="login" component={Login} onEnter= {this.logIn} />
          </Route>
        </Router>
    )
  };
};
