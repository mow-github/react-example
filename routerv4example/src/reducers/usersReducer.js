import initialState from './initialState';
import * as actionType from '../actions/actionTypes';

export default function users(state = initialState.users, action) {

  switch (action.type) {
    case actionType.SIGN_IN:

      state += action.user;

    return state;

    default:
      return state;
  }

};