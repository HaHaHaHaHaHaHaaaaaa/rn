import * as types from '../actions/Types';

const initialState = {
  status: 'done',
}

export default function doRefresh(state = initialState, action) {
  switch (action.type) {
    case types.IS_REFRESH: // 正在
      return Object.assign({}, state, {
        status: 'doing',
      });
    case types.DONE_REFRESH: // 完成
      return Object.assign({}, state, {
        status: 'done',
      })
    default:
      return state;
  }
}