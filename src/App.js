import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splashscreen from "./pages/Splashscreen";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Welcome from "./components/welcome/Welcome";
import ChangePages from "./pages/changepages";
import DetailsJob from "./components/details/detailsJob";
import Listjobs from "./components/listjobs/Listjobs";
import Profile from "./components/profiles/Profile";
import Editprofile from "./components/profiles/editprofile";
import "swiper";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <Container className="min-h-screen max-w-md mx-auto relative ">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={loading ? <Splashscreen /> : <Login />} />
          <Route path="/signup" element={<Sign load={setLoading} />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/home" element={<ChangePages />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/listjob" element={<Listjobs />} />
          <Route path="/details" element={<DetailsJob />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update" element={<Editprofile />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: #181d2d;
`;
