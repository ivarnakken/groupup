import { EDIT_USER_SUCCESS } from './types';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    default:
      return state;
  }
}
