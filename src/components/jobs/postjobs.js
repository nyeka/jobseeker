import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebase_config";
import "./style.scss";

const Postjobs = () => {
  const [namejob, setnamejob] = useState("");
  const [location, setlocation] = useState("");
  const [workplacetype, setworlplacetype] = useState("");
  const [description, setdescription] = useState("");
  const [jobtype, setjobtype] = useState("");
  const [oader, setloader] = useState(false);
  const [jobrequirement, setjobrequirement] = useState("");
  const [qualification, setqualification] = useState("");

  const senddata = async () => {
    try {
      setloader(true);
      await addDoc(collection(db, "jobs"), {
        namejob: namejob,
        location: location,
        workplacetype: workplacetype,
        description: description,
        jobtype: jobtype,
        id: auth.currentUser.uid,
        author: auth.currentUser.displayName,
        img: auth.currentUser.photoURL,
      });
    } catch (error) {
      console.log(error);
    }
    setloader(false);
  };

  return (
    <section id="postjob">
      <nav>
        <h3>Create a job</h3>
        <button className="login" onClick={senddata}>
          Post
        </button>
        {oader ? <div style={{ color: "white" }}>Loading</div> : null}
      </nav>
      <form>
        <div className="form-input">
          <label htmlFor="email">Job title</label>
          <input
            type="text"
            placeholder="Name"
            value={namejob}
            onChange={(e) => setnamejob(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="Type">Workplace type</label>
          <input
            type="text"
            placeholder="workplace type"
            value={workplacetype}
            onChange={(e) => setworlplacetype(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="location">Job location</label>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Job type</label>
          <input
            type="text"
            placeholder="job type"
            value={jobtype}
            onChange={(e) => setjobtype(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Job requirement</label>
          <textarea
            type="text"
            placeholder="Requirement"
            value={jobrequirement}
            onChange={(e) => setjobrequirement(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Job description</label>
          <textarea
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Job qualifications</label>
          <textarea
            type="text"
            placeholder="qualification"
            value={qualification}
            onChange={(e) => setqualification(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default Postjobs;
