import { EDIT_USER_SUCCESS, EDIT_USER_FAIL } from './types';
import EditUserService from '../services/editUser-service';

export const editUser = (data) => (dispatch) => {
  return EditUserService.editUser(data).then(
    (res) => {
      dispatch({
        type: EDIT_USER_SUCCESS,
        payload: { user: res },
      });
      Promise.resolve();
    },
    (err) => {
      console.error(err);
      dispatch({
        type: EDIT_USER_FAIL,
      });
      return Promise.reject();
    }
  );
};
