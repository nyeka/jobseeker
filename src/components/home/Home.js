import React, { useState, useEffect } from "react";
import "./style.scss";
import { RiMenu2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineSearch, AiTwotoneFileAdd } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { auth, db } from "../../firebase_config";
import { getDoc, doc } from "firebase/firestore";
import Bottomnav from "../bottomnav/bottomnav";
import Loading from "../pulse/loading";
import Nav from "../nav/nav";

const Home = () => {
  const [name, setname] = useState("");
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getdata = async () => {
      try {
        setloading(true);
        const id = auth.currentUser.uid;
        const docSnap = await getDoc(doc(db, "users", id));
        setdata(docSnap.data());
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };

    getdata();
  }, [data.name]);

  return (
    <>
      {" "}
      {loading ? (
        <Loading />
      ) : (
        <section id="home">
          <Nav />
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
                placeholder=" Search for Jobs title"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required={true}
              />
            </div>
          </div>
          <div className="company-container">
            <div className="popular">
              <p>Popular Company</p>
              <span>See All</span>
            </div>
            <div className="company">
              <div className="container-company">
                <div className="devider">
                  <div className="img-preview">Preview</div>
                  <div>
                    <h3>Xendit</h3>
                    <p>Armaggedon</p>
                  </div>
                </div>
                <AiTwotoneFileAdd size="25px" />
              </div>
              <div className="desk">
                <div>
                  <h2>Front End</h2>
                  <p>$40-50K/year</p>
                </div>
                <span>4 Days left</span>
              </div>
              <div className="type">
                <span>Part time</span>
                <GiSandsOfTime size="20px" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
