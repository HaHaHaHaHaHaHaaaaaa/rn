'use strict';
import * as types from '../actions/Types';
import {ToastAndroid} from 'react-native'
// 模拟服务器返回的用户信息
let user = {
  'name': 'admin',
  'age': '24'
}

export function doLogin()
{
  return dispatch => {
    dispatch(isLogining());
    // 模拟用户登录
    let result = fetch('https://github.com/')
        .then((res)=>{
          dispatch(loginSuccess(true, user));
        }).catch((e)=>{
          dispatch(loginSuccess(false, null));
        });
  }
}

function isLogining()
{
  ToastAndroid.show('in......',1000)
  return {
    type: types.LOGIN_IN_DOING
  }
}

function loginSuccess(isSuccess, user)
{
  return{
    type: types.LOGIN_IN_DONE,
    isSuccess: isSuccess,
    user: user
  }
}