import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splashscreen from "./pages/Splashscreen";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Welcome from "./components/welcome/Welcome";
import Dashboard from "./pages/Dashboard";
import Prof from "./components/users/userprof";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isauth, setisauth] = useState(false);

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
          <Route path="/signup" element={<Sign />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/profile" element={<Prof />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: #181d2d;
`;