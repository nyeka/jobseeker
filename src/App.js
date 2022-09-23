import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splashscreen from "./pages/Splashscreen";
import Login from "./pages/Login";

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
        </Routes>
      </Router>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: #181d2d;
`;
