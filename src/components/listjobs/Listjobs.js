import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase_config";
import "./style.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";

const Listjobs = () => {
  const [jobdata, setjobdata] = useState([]);
  const [loadme, setloadme] = useState(false);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();

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
    getdata();
  }, [jobdata.id]);

  const removedata = async (id) => {
    navigate("/details", { state: { id: id } });
  };

  const image = (img) => {
    if (img) {
      return <img src={img} alt="ini gambar" />;
    }
    return <IoPersonOutline size="29px" />;
  };

  return (
    <section id="listjob">
      {loadme ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="main-container">
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
          <div className="content">
            {jobdata
              .filter((val) => {
                if (
                  val.namejob.toLowerCase().includes(search.toLowerCase()) |
                  val.workplacetype.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
                return false;
              })
              .map((job, id) => {
                return (
                  <div
                    key={id}
                    className="container"
                    onClick={() => removedata(job.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {image(job.img)}
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
        </div>
      )}
    </section>
  );
};

export default Listjobs;
