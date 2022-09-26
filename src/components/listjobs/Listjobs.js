import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase_config";
import "./style.scss";

const Listjobs = () => {
  const [jobdata, setjobdata] = useState([]);
  const [loadme, setloadme] = useState(false);

  useEffect(() => {
    const getdata = async () => {
      setloadme(true);
      try {
        const snap = await getDocs(collection(db, "jobs"));
        setjobdata(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error);
      }
      setloadme(false);
    };
    console.log(jobdata.namejob);
    getdata();
  }, [jobdata.namejob]);

  return (
    <section id="listjob">
      {loadme ? (
        <div className="loading">Loading</div>
      ) : (
        jobdata.map((job) => {
          return (
            <div key={job.id}>
              <h1>{job.namejob}</h1>
              <p>{job.description}</p>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Listjobs;
