import * as types from '../actions/types';

export const userLoginReducer = (state={loading: false, success: false}, action) => {
  switch(action.type){
    case types.USER_LOGIN_REQUEST:
      return{
        loading: true
      }
    case types.USER_LOGIN_SUCCESS:
      return{
        loading: false,
        success: true,
        data: action.payload
      }
    case types.USER_LOGIN_FAILURE:
      return{
        loading: false,
        success: false,
        data: action.payload
      }
    case types.USER_LOGOUT:
      return {}

    default: 
      return state;
  }
}