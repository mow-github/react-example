import * as actionType from './actionTypes';

export function postUser(obj) {

  return function(dispatch) {

    dispatch({
      type: actionType.SIGN_IN,
      user: obj
    });

  }

}