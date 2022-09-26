import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase_config";
import Desknav from "../nav/desknav";
import "./style.scss";
import { FaWallet } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

const DetailsJob = () => {
  const location = useLocation();
  const [colect, setcolect] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getdada = async () => {
      try {
        setloading(true);
        const del = await getDoc(doc(db, "jobs", location.state.id));
        setcolect(del.data());
      } catch (error) {
        console.log(error);
      }

      setloading(false);
    };
    getdada();
  }, [location.state.id]);

  return loading ? (
    <div
      style={{
        color: "white",
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Loading
    </div>
  ) : (
    <>
      <Desknav to={-1} />
      <section id="details">
        <div className="content-text">
          <h2>
            {colect.namejob} {","} {colect.companyname} {`(${colect.jobtype})`}{" "}
            {"-"} {colect.jobsalary}
          </h2>
          <div className="container">
            <div className="text-child">
              <FaWallet />
              <p>{colect.jobtype} - entry level</p>
            </div>
            <div className="text-child">
              <BsPeople />
              <p>3,000 - 10,000 employes - {colect.namejob}</p>
            </div>
          </div>
        </div>

        <div>
          <h3>Job Description</h3>
          <p>{colect.description}</p>
        </div>
        {colect.jobrequirement && (
          <div>
            <h3>Job Requirements</h3>
            <p>{colect.jobrequirement}</p>
          </div>
        )}
        {colect.jobqualification && (
          <div>
            <h3>Job Qualification</h3>
            <p>{colect.jobqualification}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default DetailsJob;
