require('styles/space.less');
require('styles/login.less');
require ('bootstrap/dist/css/bootstrap.css');

import React, {Component} from 'react';
import $ from 'jquery';
import {Lifecycle, browserHistory} from 'react-router';

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

  }
  changeName(e) {
    this.setState({
      username:e.target.value
    })
  }
  changePassword(e) {
    this.setState({
      password:e.target.password
    })
  }

  signIn(e) {
    if(this.state.username == 'admin' && this.state.password == '123456') {
      sessionStorage.setItem('name',this.state.username);
      browserHistory.push('/home');
    }else {
      sessionStorage.clear();
    }

  }

  render() {
    return (
      <div className="container" style={{width:100+'%'}}>
        <div className="login-page">
          <div className="row login-content">
            <div className="col-md-12">
              <div className="col-md-4  col-md-offset-4 login-panel">
                <div className="col-md-12">
                  <p className="login-title text-center mbl text-gray">用户登录</p>
                </div>
                <div className="col-md-12">
                    <form className="form" role="form" onSubmit={this.signIn}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="username" placeholder="账号" onChange={this.changeName} value={this.state.username}/>
                            <i><img src="../images/user.jpg" alt="" /></i>
                        </div>
                        <div className="form-group password-box" >
                            <input type="password" className="form-control" placeholder="密码" onChange={this.changePassword} value={this.state.password}/>
                            <i><img src="../images/password.jpg" alt="" /></i>
                        </div>
                        <div className="form-group text-center mtl mbl">
                          <button type="submit" className="btn btn-primary btn-block login-btn" >登&nbsp;录</button>
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
