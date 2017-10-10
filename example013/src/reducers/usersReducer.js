import * as actionType from '../actions/actionTypes';

export default function users(state = "", action) {

  switch (action.type) {
    case actionType.SIGN_IN:
      return action.user;
    case actionType.SIGN_OUT:
      return action.user;
    default:
      return state;
  }

};