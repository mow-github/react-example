
/**
 * We don't have to use the variable 'payload', we can also just name it: 'item'
 * @param {Object} item 
 */

export function addRandomProduct(item) {
  return {
    type: 'ADD_RANDOM_PRODUCT',
    item: item
  };
}

export function updateProductPrice(item) {
  return {
    type: 'UPDATE_PRODUCT_PRICE',
    item: item
  };
}

export function addToCart(item) {
  return {
      type: 'ADD',
      item: item
  };
}

export function removeFromCart(item) {
  return {
      type: 'REMOVE',
      item: item
  };
}

export function removeOneFromCart(item) {
  return {
    type: 'REMOVE_ONE_FROM_CART',
    item: item
  };
}


export function addUser(item) {
  return {
    type: 'ADD_USER',
    item: item
  };
}

export function findUser(item) {
  return {
    type: 'FIND_USER',
    item: item
  };
}

export function logoutUser(item) {
  return {
    type: 'LOGOUT_USER',
    item: item
  };
}