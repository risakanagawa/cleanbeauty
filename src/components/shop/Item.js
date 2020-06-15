import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addCart } from "../../store/actions";

const Item = ({ match, products, addCart }) => {
  const id = match.params.id;
  const currentCategory =
    match.params.categoryId === "shop" ? "SHOP ALL" : match.params.categoryId;
  const product = products.find((product) => {
    return id === product.id.toString();
  });
  const { name, img, price, discription, category } = product;

  const [currentColor, toggleColor] = useState(null);
  const [errorMsg, toggleMsg] = useState(false);

  const isSelected = () => {
    console.log(!currentColor && category === "makeup");
    if (!currentColor && category === "makeup") {
      console.log("inside true");
      toggleMsg(true);
    } else {
      toggleMsg(false);
      addCart({ ...product, ...{ selectedColor: currentColor } });
    }
  };

  return (
    <div className="products__detail">
      <p>
        <a href={`/shop/${currentCategory}`}>{currentCategory} </a> {"<"} {name}
      </p>
      {
        <div className="products__detail--card">
          <div className="media">
            <img src={img} alt={name} />
          </div>
          <div className="discription">
            <h2>{name}</h2>
            <span>$ {price}</span>
            <p>{discription}</p>
            {errorMsg ? (
              <span className={errorMsg ? "error" : ""}>※Select color</span>
            ) : null}

            <div className="discription__makeup">
              {product.category === "makeup" && product.color
                ? product.color.map((color) => {
                    return (
                      <Fragment key={color.style}>
                        <input
                          type="radio"
                          className="checkbox"
                          name="color"
                          id={color.style}
                          value={color.style}
                        />
                        <label
                          htmlFor={color.style}
                          onClick={() => {
                            toggleColor(color);
                          }}
                        >
                          <div style={{ backgroundColor: color.color }}></div>
                          <p>{color.style}</p>
                        </label>
                      </Fragment>
                    );
                  })
                : null}
            </div>
            <button
              onClick={() => {
                isSelected();
              }}
            >
              ADD TO CART
            </button>
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
    addCart: (product, color) => dispatch(addCart(product, color)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
