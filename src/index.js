import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router,Route,browserHistory} from 'react-router';

import App from './containers/app';

const DBTableContainer = (location,cb)=>{
  require.ensure([],require=>{
    cb(null,require('./components/DBTable').default),'DBTable'}
  })
}

const routes = (
  //provider 用来将redux绑定到react上
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component="App">
        <Route path="index" >
          //getComponent对于与以前的component方法，只不过getComponent是异步的，只有当路由匹配时，才会调用这个方法
          <Route path="option1" tableName="test" getComponent={DBTableContainer}></Route>
          <Route path="option2" tableName="testSms" getComponent={DBTableContainer}></Route>
          <Route path="option3" tableName="testAction" getComponent={DBTableContainer}></Route>
        </Route>
      </Route>
    </Router>
  </Provider>
);
// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(routes, document.getElementById('app'));
