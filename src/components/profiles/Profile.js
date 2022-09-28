import React, { useEffect, useState } from "react";
import Desknav from "../nav/desknav";
import "./style.scss";
import { auth, db } from "../../firebase_config";
import { doc, getDoc } from "firebase/firestore";
import styled from "styled-components";

const Profile = () => {
  const [data, setdata] = useState([]);
  const [jobdata, setjobdata] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const id = auth.currentUser.uid;
        const docSnap = await getDoc(doc(db, "users", id));
        setdata(docSnap.data());
      } catch (error) {
        console.log(error);
      }
    };

    const getdatajob = async () => {
      try {
        const id = auth.currentUser.uid;
        const docSnap = await getDoc(doc(db, "jobs", id));
        setjobdata(docSnap.data());
      } catch (error) {
        console.log(error);
      }
    };
    getdatajob();
    getdata();
  }, [data.name]);

  const getimg = () => {
    if (data.userprofile) {
      return <img src={data.userprofile} alt="ini logo" />;
    }

    return <img src="https://i.imgur.com/6VBx3io.png" alt="ini logo" />;
  };

  return (
    <>
      {" "}
      <Desknav to={-1} textnav="Profile" img="test" name={data.name} />
      <Container className="container" img={data.cover}>
        <div className="card">
          <div className="img-container">{getimg()}</div>
        </div>
      </Container>
      <section id="profile">
        <div className="text-content">
          <div className="name-text">
            <h2>{data.name}</h2>
            <p> {data.description ? data.description : "No description"}</p>
          </div>
          <div className="content">
            <div className="work-text">
              <h3>Tupai Tech</h3>
              <span></span>
              <p>Universitas Lampung</p>
            </div>
            <div className="address">
              <span>{data.address ? data.address : "No address"}</span>
            </div>
          </div>
          <div>
            <h3>About</h3>
            <p>{data.about ? data.about : "no descritpion"}</p>
          </div>
          <div>
            <h3>Jobs Posted</h3>
            {jobdata
              ? jobdata.map((item, id) => {
                  return (
                    <div key={id}>
                      <p>{item.namejob}</p>
                    </div>
                  );
                })
              : "No job posted"}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

const Container = styled.div`
  .card {
    background: ${(props) => `url(${props.img}) ? url(${props.img}) : yellow`};
  }
`;
