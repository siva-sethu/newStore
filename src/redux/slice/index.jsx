//Hooks routes
import {combineReducers} from 'redux';

import auth from './auth';
import store from './store';
import user from './user';



const rootReducer = combineReducers({
  auth,
  store,
  user,
 
});

export default rootReducer;
