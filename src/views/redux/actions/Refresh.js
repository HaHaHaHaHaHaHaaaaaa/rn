'use strict';
import * as types from '../actions/Types';


export function isRefresh(){
    return {type:types.IS_REFRESH};
}
export function doneRefresh(){
    return {type:types.DONE_REFRESH}
}