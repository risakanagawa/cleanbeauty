import React from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

const Items = ({ products }) => {
  console.log(products);
  let { categoryId } = useParams();
  const { url } = useRouteMatch();

  const items =
    categoryId === "shopall"
      ? products
      : products.filter((product) => product.category === categoryId);
  console.log(items, "in Item");
  return (
    <div className="products__rightcontainer">
      <h1>{categoryId === "shop" ? "SHOP ALL" : categoryId.toUpperCase()}</h1>
      <div className="products__rightcontainer--flex">
      <div className="products__rightcontainer--grid">
      {items.map((item, idx) => {
        return (
          <div className="products__rightcontainer--card" key={idx}>
            <img src={item.img} alt={item.name} />
            <h2> {item.name}</h2>
            <span>${item.price}</span>
            <button>
              <Link to={`${url}/${item.id}`} >Detail</Link>
            </button>
          </div>
        );
      })}
      </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { products: state.products };
};

export default connect(mapStateToProps)(Items);
