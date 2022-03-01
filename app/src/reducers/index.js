import { combineReducers } from 'redux';
import auth from './auth';

// You combine reducers here, but as of now, it only contains "auth"
export default combineReducers({
  auth,
});
