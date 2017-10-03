import initialState from './initialState';

export default function cart(state = initialState.cart, action) {
  switch (action.type) {
    case 'ADD':

      let flag = true;
      // deep copy (omit .parse and.stringify for a shallow copy)
      let newState = Object.assign([], JSON.parse(JSON.stringify(state)));
      let newAction = Object.assign({}, JSON.parse(JSON.stringify(action.item)));
      newState.filter((item) => {

        if( item.id === action.item.id){
          item.count += 1;
          flag = false;
        }
        return item;
      });

      if(flag){
        newAction.count = 1;
        newState.push(newAction);
      }
      return newState;
    case 'REMOVE':
      return state.filter(i => i.id !== action.item.id);


    case 'REMOVE_ONE_FROM_CART':
      console.log("REMOVE_ONE_FROM_CART");

      state.filter((item) => {
        if( item.id === action.item.id && item.count !== 1){
          item.count -= 1;
        }
        return item;
      });

      return [...state];
    default:
      return state;
  }
};