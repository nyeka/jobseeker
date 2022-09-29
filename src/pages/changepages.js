import React, { useState } from "react";
import Bottomnav from "../components/bottomnav/bottomnav";
import Nav from "../components/nav/nav";
import Main from "./main";

const ChangePages = () => {
  const [value, setvalue] = useState(0);

  return (
    <>
      <Nav />
      <Main val={value} />
      <Bottomnav val={value} setval={setvalue} />
    </>
  );
};

export default ChangePages;
