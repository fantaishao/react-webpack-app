require('normalize.css/normalize.css');
require('styles/App.less');

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Spin, message} from 'antd';

import Login from '../components/login';
import Sidebar from '../components/sidebar';
import {loginSuccessCreator} from '../reducers/Login';
import ajax from '../util/ajax.js';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends Component {
  //初始化时，尝试登陆，可能上次的cookie还保留着
  //如果未登录，跳转到登陆页面
  state = {
    tryingLogin: true //尝试登陆
  }
  //App组件加载以后尝试登陆
  async componentDidMount() {
    if(!this.props.login) {
      const hide = message.loading('正在获取用户信息...',0);
      try {
        const res = await ajax.getCurrentUser();
        hide();

        if(res.success) {
          this.state.tryingLogin = false;
          this.props.handleLoginSuccess(res.data);
        }else {

        }
      } catch (e) {

      }
    }
  }
  render(){
   //加载提示
    if(this.state.tryingLogin) {
      return (
        <div className ="center-div"><Spin spinning={true} size="large"/></div>
      )
    }
    //跳转到登陆页面
    if(!this.props.login) {
      return <Login/>;
    }
    return (
      <div>
        <Sidebar/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {//此处state对象是store中定义的
  return {
    login: state.Login.login, // 是否登录
    username: state.Login.username //登录后的用户名
  }
};

const mapDisptchToProps = (dispatch) => {
  handleLoginSuccess: bindActionCreators(loginSuccessCreator, dispatch);
};

//使用conncet方法链接redux
export default connect(mapStateToProps)(AppComponent);
