import React, { useState } from "react";
import "./style.scss";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import devide from "../../assets/devider.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [show, setshow] = useState(false);
  const [showpass, setshowpass] = useState(false);

  const showpassword = () => {
    setshow(!show);
  };

  const showpassw = () => {
    setshowpass(!showpass);
  };

  return (
    <section id="sign" style={{ paddingBottom: "2rem" }}>
      <div className="text-content">
        <h1>Sign Up</h1>
        <p>Create an account here</p>
      </div>

      <div className="form">
        <div className="form-input">
          <IoPeopleOutline className="icon" size="23px" />
          <img src={devide} alt="devider" className="icon-devider" />
          <input
            type="text"
            placeholder=" create an account here"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required={true}
          />
        </div>
        <div className="form-input">
          <HiOutlineMail className="icon" size="25px" />
          <img src={devide} alt="devider" className="icon-devider" />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required={true}
          />
        </div>
        <div className="form-input">
          <FiSmartphone className="icon" size="23px" />
          <img src={devide} alt="devider" className="icon-devider" />
          <input
            type="number"
            placeholder="Mobile number"
            value={mobile}
            onChange={(e) => setmobile(e.target.value)}
            required={true}
          />
        </div>
        <div>
          <div className="form-input">
            <BiLockAlt className="icon " size="25px" />
            <img src={devide} alt="devider" className="icon-devider" />
            <input
              type={showpass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required={true}
            />
            <button className="icon-eye" onClick={showpassw}>
              {showpass ? (
                <AiOutlineEyeInvisible size="26px" />
              ) : (
                <AiOutlineEye size="26px" />
              )}
            </button>
          </div>
          <div className="form-input">
            <img src={devide} alt="devider" className="icon-devider" />
            <input
              type={show ? "text" : "password"}
              placeholder="Confirm password"
              className="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={true}
            />
            <button className="icon-eye" onClick={showpassword}>
              {show ? (
                <AiOutlineEyeInvisible size="26px" />
              ) : (
                <AiOutlineEye size="26px" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="content-bottom">
        <p>By signing up you agree with our Terms of Use</p>
        <button className="login">
          <p>Sign in</p>
        </button>
        <p className="align">
          <span>Already a member?</span>{" "}
          <Link to="/">
            <strong>Sign in</strong>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
