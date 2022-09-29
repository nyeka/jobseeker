import { addDoc, collection } from "firebase/firestore";
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
  const [salary, setsalary] = useState("");
  const [companyname, setcompanyname] = useState("");

  const senddata = async () => {
    try {
      setloader(true);
      await addDoc(collection(db, "jobs"), {
        namejob: namejob,
        location: location,
        workplacetype: workplacetype,
        description: description,
        jobtype: jobtype,
        author: auth.currentUser.displayName,
        img: auth.currentUser.photoURL,
        created: new Date().toDateString(),
        jobsalary: salary,
        jobqualification: qualification,
        jobrequirement: jobrequirement,
        id: auth.currentUser.uid,
        companyname: companyname,
      });
    } catch (error) {
      console.log(error);
    }

    setloader(false);
    setnamejob("");
    setlocation("");
    setworlplacetype("");
    setdescription("");
    setjobtype("");
    setjobrequirement("");
    setqualification("");
    setsalary("");
  };

  return (
    <section id="postjob">
      <nav>
        <h3>Create a job</h3>
      </nav>
      <form>
        <div className="form-input">
          <label htmlFor="email">Job title</label>
          <input
            type="text"
            placeholder="Name"
            value={namejob}
            onChange={(e) => setnamejob(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Company name</label>
          <input
            type="text"
            placeholder="Company name"
            value={companyname}
            onChange={(e) => setcompanyname(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="Type">Workplace type</label>
          <select
            name="gender"
            className="bg-slate-100 p-4 text-sm w-full rounded-tl-md appearance-none"
            id="cars"
            value={workplacetype}
            onChange={(e) => setworlplacetype(e.target.value)}
          >
            <option defaultValue="g" disabled selected hidden>
              Workplace type
            </option>
            <option defaultValue="onsite">On-site</option>
            <option defaultValue="hybrid">Hybrid (On-site and remote)</option>
            <option defaultValue="remote">Remote</option>
          </select>
        </div>
        <div className="form-input">
          <label htmlFor="Type">Salary</label>
          <input
            type="text"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setsalary(e.target.value)}
            required
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
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Job type</label>
          <select
            name="gender"
            className="bg-slate-100 p-4 text-sm w-full rounded-tl-md appearance-none"
            id="cars"
            value={jobtype}
            onChange={(e) => setjobtype(e.target.value)}
          >
            <option defaultValue="f" disabled selected hidden>
              Job type
            </option>
            <option defaultValue="onsite">Full-time</option>
            <option defaultValue="hybrid">Part-time</option>
            <option defaultValue="remote">Contract</option>
            <option defaultValue="remote">Internship</option>
          </select>
        </div>
        <div className="form-input">
          <label htmlFor="email">Job requirement</label>
          <textarea
            type="text"
            placeholder="Requirement"
            value={jobrequirement}
            onChange={(e) => setjobrequirement(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Job description</label>
          <textarea
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            required
          />
        </div>
      </form>
      <button
        className="login"
        onClick={senddata}
        disabled={
          !namejob | !description | !location | !salary | !jobrequirement
        }
      >
        {oader ? "Loading..." : "Post"}
      </button>
    </section>
  );
};

export default Postjobs;
