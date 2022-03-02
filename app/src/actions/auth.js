import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import AuthService from '../services/auth-service';

export const register = (username, password, birthdate) => (dispatch) => {
  return AuthService.register(username, password, birthdate).then(
    () => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      return login(username, password)(dispatch);
    },
    (err) => {
      console.error(err);
      dispatch({
        type: REGISTER_FAIL,
      });
      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (err) => {
      console.error(err);
      dispatch({
        type: LOGIN_FAIL,
      });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
