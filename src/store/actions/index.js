export const addCart = (payload) => (
  {
  type: "ADD_CART",
  payload
});

export const removeCart = (text) => ({
  type: "REMOVE_CART",
});
