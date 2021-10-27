import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import {saveState} from './localStorage';

import { userLoginReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  userLogin: userLoginReducer
});

const initialState = {}
const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
store.subscribe(() => {
  saveState(store.getState());
});

export default store;


