import {combineReducers} from 'redux';

import { userLoginReducer } from './userReducer';
// likewise we can import more reducers and combine them here

export default combineReducers({
  userLogin: userLoginReducer
});