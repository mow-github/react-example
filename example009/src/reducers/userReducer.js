import initialState from './initialState';


export default function user(state = initialState.user, action) {
  switch (action.type) {
  case 'ADD_USER':
    console.log("-- ADD_USER reducer --");
    state[0].formRegister = false;
    return [...state, action.item];
  case 'FIND_USER':
    console.log("-- FIND_USER reducer --");

    state.filter((user) => {
      if(
        user.username === action.item.username &&
        user.password === action.item.password ){
        state[0].formValid = true;
        state[0].formError = null;
      }
      return user;
    });

    if( !state[0].formValid ){
      state[0].formError = "Could not find a user";
    }

    return [...state];
    case 'LOGOUT_USER':
      console.log("-- LOGOUT_USER reducer --");

      let userState = [...state];
      console.log(userState);
      if( userState[0].formValid ){
        userState[0].formValid = false;
      }

      return userState;
  default:
  return state;
  }
};