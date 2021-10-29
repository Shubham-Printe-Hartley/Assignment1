// import axios from 'axios';
import auth from '../../services/auth';
import {loginConstants} from '../constants/index';


// dispatch objects 
const request = (type, data) => {
  return {
    type: type,
    payload: data
  }
}

const success = (type, data) => {
  return{
    type: type,
    payload: data
  }
}

const failure = (type, error) => {
  return{
    type: type, 
    payload: error
  }
}


export const login = (userCredentials) => async(dispatch) => {
  
  dispatch(request(loginConstants.USER_LOGIN_REQUEST));
  
  try{
    dispatch(request(loginConstants.USER_LOGIN_REQUEST));

    // call login API here and dispatch user actions based on response
    const response = await auth.login(userCredentials);

    // if successful save user data to local storage and dispatch login sucess action
      dispatch(success(loginConstants.USER_LOGIN_SUCCESS, response.data));
      localStorage.setItem('userLogin', JSON.stringify(response.data)) //update user data after examining response

  } catch(err) {
    dispatch(failure(loginConstants.USER_LOGIN_FAILURE, err.response.data))
  }
}

export const logout = () => (dispatch) => {
  // remove user data from local storage
  localStorage.removeItem('userLogin');

  // dispatch user logout action
  dispatch(request(loginConstants.USER_LOGOUT));
}

