const initialState = {
  count: 0,
  total: 0,
  InShoppingCart: [],
};

const shoppingCart = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action);

      let product = action.product;

      console.log(state.InShoppingCart, product);
      let total = state.total;
      total += product.price;

      const isInShoppingCart = (item, product) => {
        if (item.id !== product.id) return false;
        if (!product.selectedColor) {
          item.quantity = item.quantity + 1;
          return true;
        }
        if (
          item.selectedColor &&
          item.selectedColor.style === product.selectedColor.style
        ) {
          item.quantity = item.quantity + 1;
          return true;
        }
        return false;
      };

      if (
        state.InShoppingCart.some((item) => isInShoppingCart(item, product))
      ) {
        return {
          count: state.count + 1,
          total,
          InShoppingCart: state.InShoppingCart,
        };
      }
      return {
        count: state.count + 1,
        total,
        InShoppingCart: [...state.InShoppingCart, product],
      };

    case "ADD_QUANTITY":
      console.log("quantity");
      action.product.quantity += 1;
      return {
        count: state.count + 1,
        total: state.total + action.product.price,
        InShoppingCart: state.InShoppingCart,
      };

    case "SUB_QUANTITY":
      console.log("quantity", action);
      action.product.quantity -= 1;

      return {
        count: state.count - 1,
        total: state.total - action.product.price,
        InShoppingCart: state.InShoppingCart,
      };

    case "REMOVE_FROM_CART":
      const newTotal =
        state.total - action.payload.price * action.payload.quantity;

      if(action.payload.selectedColor) {
        console.log("inside", action.payload )
        return {
          count: state.count - action.payload.quantity,
          total: newTotal,
          InShoppingCart: state.InShoppingCart.filter(
            (product) => {
              console.log(product)
              return product.selectedColor.id !== action.payload.selectedColor.id}
          ),
        };
      }

      return {
        count: state.count - action.payload.quantity,
        total: newTotal,
        InShoppingCart: state.InShoppingCart.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default shoppingCart;
