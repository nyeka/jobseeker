import React from "react";
import Article from "../components/articles/article";
import Home from "../components/home/Home";
import Postjobs from "../components/jobs/postjobs";
import Listjobs from "../components/listjobs/Listjobs";

const Main = ({ val }) => {
  if (val === 0) {
    return <Home />;
  }
  if (val === 1) {
    return <Listjobs />;
  }

  if (val === 2) {
    return <Postjobs />;
  }

  if (val === 3) {
    return <Article />;
  }
};

export default Main;
