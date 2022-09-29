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
import { Helmet } from "react-helmet";
import logo from "../src/assets/logojs.png";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <Container className="min-h-screen max-w-md mx-auto relative ">
      <Helmet
        htmlAttributes={{
          lang: "id",
        }}
      >
        <meta name="generator" content="Gatsby" />
        <title>Nyoman Eka | JobSeeker</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://www.google.com " crossOrigin />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta itemprop="name" content="Nyoman Eka" />
        <meta itemprop="datePublished" content="30, oktober 2022" />
        <meta itemprop="image" content={logo} />
        <meta itemprop="keywords" content="find a job" />
        <meta property="og:site_name" content="Nyoman Eka" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:locale:alternate" content="ms_MY" />
        <meta property="og:title" content="JobSeeker" />
        <meta property="og:description" content="Find a match job" />
        <meta property="og:type" content="article" />

        <meta property="og:image" content={logo} />

        <meta property="og:image:alt" content="JobSeeker" />
        <meta property="article:author" content="Nyoman Eka Swardita" />
        <meta property="article:publisher" content="Nyoman Eka " />
        <meta property="article:published_time" content="30, oktober 2022" />
        <meta property="article:section" content="post" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="JobSeeker" />
        <meta
          name="twitter:description"
          content="JobSeeker is a open source platform to find a match job for you"
        />
        <meta name="twitter:image:alt" content="JobSeeker" />
        <meta content="index,follow" name="robots" />
        <meta content name="copyright" />
        <meta content="Indonesian" name="language" />
        <meta content="index,follow" name="googlebot" />
        <meta content="follow, all" name="Googlebot-Image" />
        <meta content="follow, all" name="Scooter" />
        <meta content="follow, all" name="msnbot" />
        <meta content="follow, all" name="alexabot" />
        <meta content="follow, all" name="Slurp" />
        <meta content="follow, all" name="ZyBorg" />
        <meta content="follow, all" name="Scooter" />
        <meta content="true" name="MSSmartTagsPreventParsing" />
        <meta content="ALL" name="SPIDERS" />
        <meta content="ALL" name="WEBCRAWLERS" />
        <meta
          content="aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot"
          name="search engines"
        />
      </Helmet>
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
