import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [val, setval] = useState();
  const handlerbutton = () => {
    navigate("/home");
  };

  console.log(val);
  return (
    <>
      <nav className="nav">
        <h3>Some vector here</h3>
      </nav>
      <section id="welcome">
        <div className="content">
          <h3>Find your Dream Job Here</h3>
          <p>
            We provide many types of jobs from various cities around the world
          </p>
        </div>
        <button className="button" onClick={handlerbutton}>
          <p>Get Started</p>
        </button>
      </section>
    </>
  );
};

export default Welcome;
