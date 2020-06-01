const initialState = {
  count: 0,
  InShoppingCart: [],
};

const shoppingCart = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "ADD_CART":
      return {
        count: state.count + 1,
        InShoppingCart: [...state.InShoppingCart, action.payload],
      };
    case "REMOVE_CART":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default shoppingCart;
