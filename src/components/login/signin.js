import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import devide from "../../assets/devider.svg";
import "./style.scss";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import logo from "../../assets/logojs.png";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase_config";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [loading, setloading] = useState(false);
  const [erroEmail, seterrorEmail] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const navigate = useNavigate();

  const handleShowPassword = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
  };

  const login = async () => {
    try {
      setloading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        seterrorPassword("Password is incorrect");
      }
      if (error.code === "auth/user-not-found") {
        seterrorEmail("Email not found");
      }
      if (!email) {
        seterrorEmail("Please input email");
      }
      if (!password) {
        seterrorPassword("Password is empty");
      }
    }

    setTimeout(() => {
      seterrorEmail("");
      seterrorPassword("");
    }, 4000);
    setloading(false);
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setloading(true);
      await signInWithPopup(auth, provider);
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        userprofile: auth.currentUser.photoURL,
      });
      navigate("/welcome");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/popup-closed-by-user") {
        console.log("closed");
      }
    }
    setloading(false);
  };

  const githublogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      setloading(true);
      await signInWithPopup(auth, provider);
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        userprofile: auth.currentUser.photoURL,
      });
      navigate("/welcome");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/popup-closed-by-user") {
        console.log("ganteng");
      }
    }
    setloading(false);
  };

  return (
    <section id="signin">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="text-content">
        <h1>Sign In</h1>
      </div>
      <form>
        <div>
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
          <span className="error">{erroEmail}</span>
        </div>
        <div>
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
          <span className="error">{errorPassword}</span>
        </div>
      </form>
      <div className="cek">
        <input type="checkbox" name="remember" id="checkbox1" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <div className="main-login">
        {loading ? (
          <button disabled={true} className="login">
            Loading...
          </button>
        ) : (
          <button className="login" onClick={login}>
            <p>Sign in</p>
          </button>
        )}
        <div className="bottom-text">
          <p>
            New Member?{" "}
            <Link to="/signup">
              <span>Sign up</span>
            </Link>
          </p>
          <div className="google-login">
            <h3>Or continue with</h3>
            <div className="google-button">
              <button className="login" onClick={googleLogin}>
                Google
              </button>
              <button className="login" onClick={githublogin}>
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
