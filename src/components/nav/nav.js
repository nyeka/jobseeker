import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase_config";
import { IoPersonOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./data";
import "./Navbar.css";
import "./style.scss";

const Nav = () => {
  const [data, setdata] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

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

  const getprof = () => {
    if (data.userprofile) {
      return <img src={data.userprofile} alt="user profile" />;
    }
    return <img src="https://i.imgur.com/6VBx3io.png" alt="ini logo" />;
  };

  return (
    <Container>
      <RiMenu2Line size="29px" onClick={showSidebar} />
      <Link to="/profile">{getprofile()}</Link>
      <nav
        className={sidebar ? "nav-menu active" : "nav-menu"}
        style={{ zIndex: "3" }}
      >
        <div
          style={{ padding: "24px", display: "flex", flexDirection: "column" }}
        >
          <div className="icons">
            <AiOutlineClose size="29px" onClick={showSidebar} />
          </div>
          <div className="menu-name">
            {getprof()}
            <h3>{data.name}</h3>
          </div>
        </div>
        <ul className="nav-menu-items" onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;

const Container = styled.nav`
  padding: 24px;
`;
