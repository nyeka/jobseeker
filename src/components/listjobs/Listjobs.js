import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase_config";
import "./style.scss";
import { RiMenu2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";

const Listjobs = ({ setval }) => {
  const [jobdata, setjobdata] = useState([]);
  const [loadme, setloadme] = useState(false);
  const [datasend, setdatasend] = useState([]);
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    const getdata = async () => {
      setloadme(true);
      try {
        const id = auth.currentUser.uid;
        const docSnap = await getDoc(doc(db, "users", id));
        setdata(docSnap.data());
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

  const send = async () => {
    try {
      const snapda = await getDocs(
        collection(db, "jobs", "maPcvw88KQduW0ESmpkGkVjtVDv2")
      );
      setdatasend(snapda.data);
    } catch (error) {
      console.log(error);
    }

    console.log(datasend);
  };

  const getprofile = () => {
    if (data.userprofile) {
      return <img src={data.userprofile} alt="user profile" />;
    }
    return <IoPersonOutline size="29px" />;
  };

  return (
    <section id="listjob">
      {loadme ? (
        <div className="loading">Loading</div>
      ) : (
        <div>
          <nav>
            <RiMenu2Line size="29px" />
            {getprofile()}
          </nav>
          <div className="container-form">
            <div className="form-input">
              <AiOutlineSearch className="icon" size="21px" />
              <input
                type="text"
                placeholder=" Search for Jobs title"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
          </div>

          {jobdata.map((job) => {
            return (
              <div key={job.id} className="container">
                <img src={job.img} alt="ini gambar" />
                <div className="text-content">
                  <h3>
                    {job.namejob}
                    {","} {`(${job.workplacetype})`} {"-"} {job.jobsalary}
                  </h3>
                  <span>{job.jobtype}</span>
                  <p>{job.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Listjobs;
