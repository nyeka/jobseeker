import React from "react";
import "./style.scss";

const Welcome = () => {
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
        <div className="button">
          <p>Get Started</p>
        </div>
      </section>
    </>
  );
};

export default Welcome;
