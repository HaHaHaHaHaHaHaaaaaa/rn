'use strict';

import {combineReducers} from 'redux';
import loginIn from './Login';
import doRefresh from './Refresh';

const rootReducer = combineReducers({
  loginIn: loginIn,
  doRefresh:doRefresh
});

export default rootReducer;