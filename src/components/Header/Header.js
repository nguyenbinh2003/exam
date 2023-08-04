import "./Header.css";

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Todo</h1>
      <div>
        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/complete">Complete</Link>
      </div>
    </div>
  );
};

export default Header;
