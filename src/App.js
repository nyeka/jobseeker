import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splashscreen from "./pages/Splashscreen";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Welcome from "./components/welcome/Welcome";
import Prof from "./components/users/userprof";
import ChangePages from "./pages/changepages";
import Loading from "./components/pulse/loading";
import Buttonload from "./components/pulse/buttonload";
import DetailsJob from "./components/details/detailsJob";
import Listjobs from "./components/listjobs/Listjobs";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Container className="min-h-screen max-w-md mx-auto relative ">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={loading ? <Splashscreen /> : <Login />} />
          <Route path="/signup" element={<Sign load={setLoading} />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/home" element={<ChangePages />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/profile" element={<Prof />} />
          <Route path="/listjob" element={<Listjobs />} />
          <Route path="/load" element={<Buttonload />} />
          <Route path="/details" element={<DetailsJob />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: #181d2d;
`;
