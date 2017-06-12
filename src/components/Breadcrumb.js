require('../styles/breadcrumb.less');

import React, {Component} from 'react';
import {connect} from 'react-router';
import { Breadcrumb } from 'antd';

class Navbar extends Component {
  render() {
    return  <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item><a href="">系统设置</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="">表格</a></Breadcrumb.Item>
              <Breadcrumb.Item>帮助</Breadcrumb.Item>
            </Breadcrumb>
  }
}

export default Navbar;
