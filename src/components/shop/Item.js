import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../../store/actions";

const Item = ({ match, products, addCart }) => {
  const id = match.params.id;
  const currentCategory = match.params.categoryId === "shop" ? "SHOP ALL" : match.params.categoryId;
  const product = products.find((product) => {
    console.log(match);
    return id === product.id.toString();
  });
  return (
    <div className="products__detail">
      <p>
          <a href={`/shop/${currentCategory}`}>{currentCategory} </a>
        > {product.name}
      </p>
      {
        <div className="products__detail--card">
          <div className="media">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="discription">
            <h2>{product.name}</h2>
            <span>$ {product.price}</span>
            <p>{product.discription}</p>
            <button onClick={() => addCart(product)}>ADD TO CART</button>
          </div>
        </div>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { products: state.products };
};
function mapDispatchToProps(dispatch) {
    return {
      addCart: (product) => dispatch(addCart(product))
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Item);
