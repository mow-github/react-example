import initialState from './initialState';
import * as actionType from '../actions/actionTypes';

export default function movies(state = initialState.loading, action) {
  switch (action.type) {
    case actionType.UPDATE_LOADING:

      console.log("UPDATE_LOADING reducer", action);

      return action.loadingValue;
    default:
      return state;
  }
};