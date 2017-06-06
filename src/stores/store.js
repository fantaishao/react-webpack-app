import {createStore, combineReducers} from 'redux';

import Login from '../reducers/Login.js';

//初始状态，把每个组件整合起来
const initState = {
  Login: Login.initState
};

//每个组件自己的reducer负责维护自己的状态
const reducers = {
  Login: Login.reducer
};

const store = createStore(combineReducers(reducers),initState)

export default store;
