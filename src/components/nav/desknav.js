import React from "react";
import "./desk.scss";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Desknav = ({ to, navtext, textnav, img, name, desc, about, address }) => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/update", {
      state: { name: name, desc: desc, about: about, address: address },
    });
  };

  return (
    <nav id="nav">
      <Link to={to} className="link">
        <BsArrowLeft size="20px" />
        {navtext && <h3>{navtext}</h3>}
        {textnav && <h1>{textnav}</h1>}
      </Link>
      {img && (
        <AiOutlineSetting
          size="20px"
          onClick={handler}
          style={{ cursor: "pointer" }}
        />
      )}
    </nav>
  );
};

export default Desknav;
