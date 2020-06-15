import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <h1>Oh-oh!</h1>
      <h2>
        Seems something went wrong! <span role="img" aria-label="emoji">🤦‍♀️</span>
      </h2>
      <h2>
        <Link to="/">Back home?</Link>
      </h2>
    </div>
  );
};

export default ErrorPage;
