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
      <div className="login-page" style={{width:100+'%'}}>
        <div className="login-content">
          <div className="login-panel">
              <p className="login-title text-center mbl text-gray">用户登录</p>
              <form className="form" role="form" onSubmit={this.signIn}>
                  <Input name="username" id="username" value={username}
                    placeholder="用户名" prefix={<Icon type="user" />} suffix={suffix}
                    ref={node => this.usernameInput = node} onChange={this.changeName} />
                  <input type="text" className="form-control" name="username" id="username" placeholder="账号" onChange={this.changeName}/>
                  <i><img src="../images/user.jpg" alt="" /></i>
                  <input type="password" className="form-control" name="password" id="password" placeholder="密码" onChange={this.changePassword}/>
                  <i><img src="../images/password.jpg" alt="" /></i>
                  <button type="submit" className="btn btn-primary btn-block login-btn" >登&nbsp;录</button>
              </form>
          </div>
        </div>
      </div>
    )
  }
};
