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

const Prof = () => {
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const register = async () => {
    try {
      setloading(true);
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        name: auth.currentUser.displayName,
        mobile: mobile,
        email: auth.currentUser.email,
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }

    setloading(false);
  };

  return (
    <>
      {" "}
      {loading ? (
        <div style={{ color: "white" }}>Loading</div>
      ) : (
        <section id="sign" style={{ paddingBottom: "2rem" }}>
          <div className="text-content">
            <h1>Sign Up</h1>
            <p>Create an account here</p>
          </div>

          <div className="form">
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
          </div>
          <div className="content-bottom">
            <button className="login" onClick={register}>
              <p>Continue</p>
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Prof;
