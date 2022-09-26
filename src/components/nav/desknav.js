import React from "react";
import "./desk.scss";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Desknav = ({ to }) => {
  return (
    <nav id="nav">
      <Link to={to} className="link">
        <BsArrowLeft size="20px" />
        <h3>Description</h3>
      </Link>
    </nav>
  );
};

export default Desknav;
