import React from "react";
import "./desk.scss";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";

const Desknav = ({ to, navtext, textnav, img }) => {
  return (
    <nav id="nav">
      <Link to={to} className="link">
        <BsArrowLeft size="20px" />
        {navtext && <h3>{navtext}</h3>}
        {textnav && <h1>{textnav}</h1>}
      </Link>
      {img && (
        <Link to="/update">
          <AiOutlineSetting size="20px" />
        </Link>
      )}
    </nav>
  );
};

export default Desknav;
