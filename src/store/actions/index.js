
import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY } from "./actionTypes";

export const addCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const addQuantity = (product) => {
  return {
    type: ADD_QUANTITY,
    product
  };
};

export const subQuantity = (product) => {
  return {
    type: SUB_QUANTITY,
    product
  };
};

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload
});
