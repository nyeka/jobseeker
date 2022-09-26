import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase_config";
import { IoPersonOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";

const Nav = () => {
  const [data, setdata] = useState([]);

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

    getdata();
  }, [data.name]);

  const getprofile = () => {
    if (data.userprofile) {
      return <img src={data.userprofile} alt="user profile" />;
    }
    return <IoPersonOutline size="29px" />;
  };

  return (
    <Container>
      <RiMenu2Line size="29px" />
      {getprofile()}
    </Container>
  );
};

export default Nav;

const Container = styled.nav``;
