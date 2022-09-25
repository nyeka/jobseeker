import React, { useState } from "react";
import Bottomnav from "../components/bottomnav/bottomnav";
import Main from "./main";

const ChangePages = () => {
  const [value, setvalue] = useState(0);
  return (
    <>
      <Main val={value} />
      <Bottomnav val={value} setval={setvalue} />
    </>
  );
};

export default ChangePages;
