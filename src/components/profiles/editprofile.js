import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebase_config";
import Desknav from "../nav/desknav";
import { useLocation } from "react-router-dom";
import "./editstyle.scss";

const Editprofile = () => {
  const location = useLocation();
  const [name, setname] = useState(location.state.name);
  const [description, setdescription] = useState("");
  const [address, setaddress] = useState("");
  const [workplace, setworkplace] = useState("");
  const [loading, setloading] = useState(false);

  const updatedata = async () => {
    try {
      setloading(true);
      const id = auth.currentUser.uid;
      await updateDoc(doc(db, "users", id), {
        name: name,
        description: description,
        address: address,
        workplace: workplace,
      });
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };
  return (
    <>
      <Desknav to={-1} navtext="Edit Profile" />
      <section id="editprofile">
        <form>
          <div className="form-input">
            <lable>Name</lable>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>Description</label>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>Address</label>
            <input
              type="text"
              placeholder="Work place"
              value={workplace}
              onChange={(e) => setworkplace(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>Address</label>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
        </form>
        <button className="login" onClick={updatedata}>
          {loading ? "Loading..." : "Update"}
        </button>
      </section>
    </>
  );
};

export default Editprofile;
