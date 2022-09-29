import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import devide from "../../assets/devider.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase_config";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [show, setshow] = useState(false);
  const [showpass, setshowpass] = useState(false);
  const [loading, setloading] = useState(false);
  const [errorName, seterrorName] = useState("");
  const [errorEmail, seterrorEmail] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [errorconfirmpasssword, seterrorconfirmpassword] = useState("");
  const navigate = useNavigate();

  const regis = async ({ setisAuth }) => {
    try {
      setloading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        name: name,
        email: email,
        mobile: mobile,
        password: password,
      });
      navigate("/welcome");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        seterrorEmail("Email already in use");
      }
      if (error.code === "auth/invalid-email") {
        seterrorEmail("Email is invalid");
      }
      if (error.code === "auth/weak-password") {
        seterrorPassword("Password is weak");
      }
      if (!name) {
        seterrorName("Name is empty");
      }
      if (!email) {
        seterrorEmail("Email is empty");
      }
      if (!password) {
        seterrorPassword("Password is empty");
      }
      if (!confirmPassword) {
        seterrorconfirmpassword("Confirm password is empty");
      }
      if (password !== confirmPassword) {
        seterrorPassword("Password not match");
      }
      if (password.length < 6) {
        seterrorPassword("Password must be at least 6 characters");
      }
    }

    setTimeout(() => {
      seterrorEmail("");
      seterrorPassword("");
      seterrorconfirmpassword("");
      seterrorName("");
    }, 3000);
    setloading(false);
  };

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
      <form className="form">
        <div>
          <div className="form-input">
            <IoPeopleOutline className="icon" size="23px" />
            <img src={devide} alt="devider" className="icon-devider" />
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required={true}
            />
          </div>
          <span className="error">{errorName}</span>
        </div>
        <div>
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
          <span className="error">{errorEmail}</span>
        </div>
        <div>
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
          <span>{}</span>
        </div>
        <div>
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
            <span className="error">{errorPassword}</span>
          </div>
          <div>
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
            <span className="error">{errorconfirmpasssword}</span>
          </div>
        </div>
      </form>
      <div className="content-bottom">
        <p>By signing up you agree with our Terms of Use</p>
        <button
          className="login"
          onClick={regis}
          disabled={password !== confirmPassword ? true : false}
        >
          <p>{loading ? "Loading..." : "Sign up"}</p>
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
