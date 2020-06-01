import React from "react";
import { connect } from "react-redux";

const InCart = () => {
  return <div>Incart!</div>;
};

const mapStateToProps = (state) => {
  return { InCart: state.shoppingCart };
};

export default connect(mapStateToProps)(InCart);
