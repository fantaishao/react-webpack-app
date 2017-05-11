require('styles/space.less');
require('styles/login.less');
require ('bootstrap/dist/css/bootstrap.css');

import React, {Component} from 'react';
import $ from 'jquery';

export default class Login extends Component {
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
                    <form className="form" role="form">
                        <div className="form-group">
                            <input type="text" className="form-control" id="username" placeholder="账号"/>
                            <i><img src="../images/user.jpg" alt="" /></i>
                        </div>
                        <div className="form-group password-box" >
                            <input type="password" className="form-control" placeholder="密码"/>
                            <i><img src="../images/password.jpg" alt="" /></i>
                        </div>
                        <div className="form-group text-center mtl mbl">
                          <button type="submit" className="btn btn-primary btn-block login-btn">登&nbsp;录</button>
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
