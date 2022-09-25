import React, { useState, useEffect } from "react";
import "./style.scss";
import { RiMenu2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineSearch, AiTwotoneFileAdd } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { auth, db } from "../../firebase_config";
import { getDoc, collection, doc } from "firebase/firestore";

const Home = () => {
  const [name, setname] = useState("");
  const [username, setusername] = useState();
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

      console.log(data.name);
    };

    getdata();
  }, [data.name]);

  return (
    <>
      {" "}
      {loading ? (
        <div
          style={{
            color: "white",
            fontSize: "34px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading.. fetching data
        </div>
      ) : (
        <section id="home">
          <nav>
            <RiMenu2Line size="29px" />
            <IoPersonOutline size="29px" />
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
