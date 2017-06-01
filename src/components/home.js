import React, {Component} from 'react';
import $ from 'jquery';
import {Lifecycle, browserHistory} from 'react-router';

export default class Home extends Component {
  render() {
    var username = sessionStorage.getItem('username');
    if(!username) {
      browserHistory('/login');
    }
    return (
      <div className="containers">
        这是首页
      </div>
    );
  }
};
