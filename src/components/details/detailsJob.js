import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase_config";
import Desknav from "../nav/desknav";
import "./style.scss";

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
        <h1>{colect.namejob}</h1>
      </section>
    </>
  );
};

export default DetailsJob;
