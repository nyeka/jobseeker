import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { VscSave } from "react-icons/vsc";
import { RiArticleLine } from "react-icons/ri";

const Bottomnav = ({ val, setval }) => {
  return (
    <BottomNavigation
      showLabels
      sx={{
        backgroundColor: "#2a3a55",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        gap: "10px",
        zIndex: 1,
      }}
      value={val}
      onChange={(event, newValue) => {
        setval(newValue);
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<AiOutlineHome size="25px" />}
      />
      <BottomNavigationAction
        label="Jobs"
        icon={<MdOutlineWork size="25px" />}
      />
      <BottomNavigationAction label="post" icon={<GrAdd size="25px" />} />
      <BottomNavigationAction
        label="Article"
        icon={<RiArticleLine size="25px" />}
      />
    </BottomNavigation>
  );
};

export default Bottomnav;
