import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase_config";
import "./style.scss";
import { RiMenu2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";

const Page = () => {
  const [jobdata, setjobdata] = useState([]);
  const [loadme, setloadme] = useState(false);
  const [datasend, setdatasend] = useState([]);
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");

  const getprofile = () => {
    if (data.userprofile) {
      return <img src={data.userprofile} alt="user profile" />;
    }
    return <IoPersonOutline size="29px" />;
  };

  if (loadme) {
    return <p>loading</p>;
  }
  return (
    <section id="home">
      <nav>
        <RiMenu2Line size="29px" />
        {getprofile()}
      </nav>
      <div className="text-header">
        <p>
          Hi {data.name}, <br /> Find your dream job
        </p>
      </div>
      <div className="container-form">
        <div className="form-input">
          <AiOutlineSearch className="icon" size="21px" />
          <input
            type="text"
            placeholder="Search job"
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
      </div>
      <div className="container-job">
        {jobdata
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.namejob.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="card-job" key={key}>
                <div className="card-job-header">
                  <img src={val.image} alt="job" />
                </div>
                <div className="card-job-body">
                  <p>{val.namejob}</p>
                  <p>{val.company}</p>
                  <p>{val.location}</p>
                </div>
                <div className="card-job-footer">
                  <button>Apply</button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Page;
