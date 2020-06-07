
import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY, TOGGLE_COLOR } from "./actionTypes";

export const addCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const addQuantity = (product) => {
  console.log("inside!", product)
  return {
    type: ADD_QUANTITY,
    product
  };
};

export const subQuantity = (product) => {
  console.log("inside!", product)
  return {
    type: SUB_QUANTITY,
    product
  };
};

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload
});
