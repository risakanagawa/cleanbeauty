import React from "react";
import { connect } from "react-redux";

import { addQuantity, subQuantity, removeFromCart } from "../../store/actions";
import "./cart.scss";

const InCart = ({ shoppingCart, addQuantity, subQuantity, removeFromCart }) => {
  const { count, total, InShoppingCart } = shoppingCart;
  console.log(total);


  const basket = () => {
    return InShoppingCart.map((product) => {
      const { id, name, price, quantity } = product;
      console.log(product)
      return (
        <div className="cart__products--row" key={id} >
          <ul>
            <li>
              {name}
              {product.color ? <p>{product.selectedColor.style}</p> : null}
              <button onClick={() => removeFromCart(product)}>remove</button>
            </li>
            <li>{price}</li>
            <li>
              <button
                onClick={() => {
                  quantity === 1
                    ? removeFromCart(product)
                    : subQuantity(product);
                }}
              >
                -
              </button>
              {quantity} <button onClick={() => addQuantity(product)}>+</button>{" "}
            </li>
            <li>{quantity * price}</li>
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <ul>
          <li>PRODUCT</li>
          <li>PRICE</li>
          <li>QUONTITY</li>
          <li>TOTAL</li>
        </ul>
      </div>
      <div className="cart__products">{count === 0 ? <p>Nothing in your shopping cart.</p> : basket()}</div>
      <div className="cart__total">
        <p>TOTAL ${total}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { shoppingCart: state.shoppingCart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (id, price) => dispatch(addQuantity(id, price)),
    subQuantity: (id, price) => dispatch(subQuantity(id, price)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InCart);
