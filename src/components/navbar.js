require('../styles/navbar.less');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;

class Navbar extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return  (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="navbar"
      >
        <Menu.Item key="mail">
          首页
        </Menu.Item>
        <Menu.Item key="app" disabled>
          表格
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">网站简介</a>
        </Menu.Item>
        <SubMenu title={<span>系统设置</span>}>
          <MenuItemGroup title="个人信息">
            <Menu.Item key="setting:1">修改密码</Menu.Item>
            <Menu.Item key="setting:2">个人信息</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="操作">
            <Menu.Item key="setting:3">修改密码</Menu.Item>
            <Menu.Item key="setting:4">退出</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    )
  }
}

export default Navbar;
