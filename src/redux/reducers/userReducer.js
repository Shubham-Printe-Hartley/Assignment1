import {loginConstants} from '../constants/index';

const initialState = {
  loading: false,
  data:null
}

export const userLoginReducer = (state=initialState, action) => {
  switch(action.type){
    case loginConstants.USER_LOGIN_REQUEST:
      return{
        ...state,
        error: null,
        loading: true,
        data: null
      }
    case loginConstants.USER_LOGIN_SUCCESS:
      return{
        ...state,
        loading: false,
        data: action.payload,
      }
    case loginConstants.USER_LOGIN_FAILURE:
      return{
        ...state,
        loading: false,
        data: null,
        error: action.payload,
        errorMessage: action.payload.message
      }
    case loginConstants.USER_LOGOUT:
      return initialState

    default: 
      return state;
  }
}