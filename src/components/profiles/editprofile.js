import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebase_config";
import Desknav from "../nav/desknav";

const Editprofile = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [address, setaddress] = useState("");
  const [workplace, setworkplace] = useState("");

  const updatedata = async () => {
    try {
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
  };
  return (
    <>
      <Desknav to={-1} navtext="Edit Profile" />
      <section>
        <form>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Work place"
            value={workplace}
            onChange={(e) => setworkplace(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
        </form>
        <button onClick={updatedata}>Save</button>
      </section>
    </>
  );
};

export default Editprofile;
