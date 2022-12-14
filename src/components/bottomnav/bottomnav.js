import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { BiAddToQueue } from "react-icons/bi";

const Bottomnav = ({ val, setval }) => {
  return (
    <BottomNavigation
      sx={{
        backgroundColor: "#2a3a55",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        zIndex: 1,
      }}
      value={val}
      onChange={(event, newValue) => {
        setval(newValue);
      }}
    >
      <BottomNavigationAction icon={<AiOutlineHome size="25px" />} />
      <BottomNavigationAction icon={<MdOutlineWork size="25px" />} />
      <BottomNavigationAction icon={<BiAddToQueue size="25px" />} />
      <BottomNavigationAction icon={<RiArticleLine size="25px" />} />
    </BottomNavigation>
  );
};

export default Bottomnav;
