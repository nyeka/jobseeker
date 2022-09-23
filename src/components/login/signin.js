import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import devide from "../../assets/devider.svg";
import "./style.scss";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import logo from "../../assets/logojs.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
  };

  return (
    <>
      <section id="signin">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-content">
          <h1>Sign In</h1>
        </div>
        <form>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <HiOutlineMail className="icon mass" size="25px" />
            <img src={devide} alt="devider" className="icon-devider" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <BiLockAlt className="icon mass" size="25px" />
            <img src={devide} alt="devider" className="icon-devider" />
            <input
              type={isShow ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="icon-eye" onClick={handleShowPassword}>
              {isShow ? (
                <AiOutlineEyeInvisible size={"26px"} />
              ) : (
                <AiOutlineEye size={"26px"} />
              )}
            </button>
          </div>
        </form>
        <div className="cek">
          <input type="checkbox" name="remember" id="checkbox1" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <div className="main-login">
          <button className="login">
            <p>Sign in</p>
          </button>
          <div className="bottom-text">
            <p>
              <u>Forgot password?</u>
            </p>
            <p>
              New Member? <span>Sign up</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
