require('normalize.css/normalize.css');
require('styles/App.css');

import React,{Component} from 'react';
import Login from '../components/login';

// let yeomanImage = require('../images/yeoman.png');

export default class AppComponent extends Component {
  render() {
    return (
      <div>
        <Login/>
      </div>
    );
  }
}
