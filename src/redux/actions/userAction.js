import axios from 'axios';
import * as types from './types';

export const login = (userCredentials) => async(dispatch) => {
  try{
    dispatch({
      type: types.USER_LOGIN_REQUEST
    });

    // call login API here and dispatch user actions based on response

    const response = await axios.post('https://perkzza-dev-api-tenants.perkzza.com/api/v1/tenant/login', userCredentials);
    const data = response.data;
    const status = response.status
    console.log(response);
    
    // if successful save user data to local storage and dispatch login sucess action
    if(status===200){
      dispatch({
        type: types.USER_LOGIN_SUCCESS,
        payload: data //update user data after examining response
      });

      localStorage.setItem('userLogin', JSON.stringify(data)) //update user data after examining response

      // window.location.reload();
    }else{ // if failed dispatch login failed action
      dispatch({
        type: types.USER_LOGIN_FAILURE,
        payload: data //update user data after examining response
      });
    }
  } catch(err) {
    dispatch({
      type: types.USER_LOGIN_FAILURE,
      payload: err
    })
  }
}

export const logout = () => (dispatch) => {

  console.log("logout clicked")
  // remove user data from local storage
  localStorage.removeItem('userLogin');

  // dispatch user logout action
  dispatch({
    type: types.USER_LOGOUT
  });

  // window.location.reload();
}