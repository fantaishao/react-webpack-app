//登录成功事件

export const loginSuccessCreator = (username) => {
  return {
    type:'LOGIN_SUCCESS',
    payload: username
  }
}

const initState = {
  login: false,//是否已登录
  username: '未登录'//登录后的用户名
};

const reducer = (state = initState, action={}) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {...state,login:true,username: action.payload};
    default:
      return state;
  }
};

export default {initState,reducer};
