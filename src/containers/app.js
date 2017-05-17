require('normalize.css/normalize.css');
require('styles/App.less');

import React,{Component} from 'react';
import Login from '../components/login';
import Home from '../components/home';
import ReactRouter from '../routes/route';


// let yeomanImage = require('../images/yeoman.png');

export default class AppComponent extends Component {
  render() {
    return (
        <ReactRouter/>
    );
  }
}
