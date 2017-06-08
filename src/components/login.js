require('styles/space.less');
require('styles/login.less');
require ('bootstrap/dist/css/bootstrap.css');

import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import {Lifecycle, browserHistory} from 'react-router';
import {Input, Icon} from 'antd';

import Home from '../components/home';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    };
    this.signIn = this.signIn.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.emitEmpty = this.emitEmpty.bind(this);
  }

  changeName(e) {
    this.setState({
      username:e.target.value
    })
  }

  changePassword(e) {
    this.setState({
      password:e.target.value
    })
  }

  emitEmpty(e) {
    this.usernameInput.focus();
    this.setState({username:''});
  }

  signIn(e) {
    if(this.state.username == 'admin' && this.state.password == '123456') {
      console.log(123);
      sessionStorage.setItem('name',this.state.username);
      browserHistory('/');
    }else {
      sessionStorage.clear();
    }

  }

  render() {
    const { username } = this.state;
    const suffix = username ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    return (
      <div id="loginDiv" style={{width:100+'%'}}>
        <div className="login">
          <div className="login-panel">
              <h1 className="login-title text-center mbl text-gray">用户登录</h1>
              <form className="form" role="form" onSubmit={this.signIn}>
                  <Input className="login-input" type="text" name="username" id="username" value={this.state.username}
                    placeholder="用户名" prefix={<Icon type="user" />} suffix={suffix}
                    ref={node => this.usernameInput = node} onChange={this.changeName} />
                  <Input className="login-input" type="password" name="password" id="password" value={this.state.password}
                    placeholder="密码" prefix={<Icon type="key" />} suffix={suffix}
                    ref={node => this.passwordInput = node} onChange={this.changePassword} />
                  <button type="submit" className="btn btn-primary btn-block btn-large">登&nbsp;录</button>
              </form>
          </div>
        </div>
      </div>
    )
  }
};
