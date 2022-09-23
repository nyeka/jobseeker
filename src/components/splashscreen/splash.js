import React from "react";
import logo from "../../assets/logojs.png";
import "./style.scss";

const Splash = () => {
  return (
    <div className="splashScreen">
      <img src={logo} alt="logo" className="w-[182px] h-[182px]" />
    </div>
  );
};

export default Splash;
