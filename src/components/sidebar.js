require('../styles/Sidebar.less');

import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Menu, Icon} from 'antd';

import items from '../datas/menu.js';

require('../styles/Sidebar.less');

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class Sidebar extends Component {
  transfromMenuItem(level, paths, isLevel1) {
    const parentPath = paths.join('/');
    return (
      <MenuItem key={level.key}>
        {level.icon&&<Icon type={level.icon}/>}
        {/**如果是顶级菜单，没有图标，默认取第一个字**/}
        {isLevel1&&!level.icon&&<span className="invisible-nav-text">{level.name[0]}</span>}
        <Link to={'/${parentPath}'}>
          <span className="nav-text">{level.name}</span>
        </Link>
      </MenuItem>
    )
  }

  //每次组件加载的时候解析一次侧边栏  不用每次render的时候都去加载
  componentWillMount() {
    const paths = [];
    const level1KeySet = new Set();//存放所有顶级菜单
    const level2keyMap = new Map();//存放所有二级菜单与顶级菜单的对应关系

    const menu = items.map((level1) => {
      paths.push(level1.key);
      level1KeySet.add(level1.key);
      if(level1.child) {
        const level2Menu = level1.child.map((level2) => {
           paths.push(level2.key);
           level2keyMap.set(level2.key,level1.key);
           if(level2.child) {
             const level3Menu = level2.child.map((level3) => {
               paths.push(level2.key);
               const tmp = this.transfromMenuItem(level3,paths);
               paths.pop();
               return tmp;
             });
             paths.pop();

             return (
               <SubMenu key={level2.key} title = {level2.icon?<span><Icon type={level2.icon}/>{level2.name}</span>:level2.name}>
                 {level3Menu}
               </SubMenu>
             )
           }else {
             const tmp = this.transfromMenuItem(level2,paths);
             paths.pop();
             return tmp;
           }
        });
        paths.pop();

        let level1Title;
        if(level1.icon) {
          level1Title = <span><Icon type={level1.icon}/><span className="nav-text">{level1.name}</span></span>;
        }else {
          level1Title = <span><span className="invisible-nav-text">{level1.name[0]}</span><span className="nav-text">{level1.name}</span></span>;
        }
        return (
          <SubMenu key={level1.key} title = {level1Title}>
            {level2Menu}
          </SubMenu>
        )
      }else {
        const tmp = this.transfromMenuItem(level1,paths,true);
        paths.pop();
        return tmp;
      }
    });

    this.menu = menu;
    this.level1KeySet = level1KeySet;
    this.level2keyMap = level2keyMap;
  }

  render() {
    return (
      <aside className={this.props.collapse?"antd-layout-sidebar-collapse":"antd-layout-sidebar"}>
        <Menu theme="dart" mode="inline">
          {this.menu}
        </Menu>
      </aside>
    )
  }
}

export default connect()(Sidebar);
