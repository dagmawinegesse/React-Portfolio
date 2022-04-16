import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Projects from "./Components/pages/Projects";
import Skills from "./Components/pages/Skills";
import Footer from "./Components/Footer";
import Education from "./Components/pages/Education";
import GithubCards from "./Components/GithubCards";
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop>

        {/* put anything that should be displayed to all pages */}
        <GithubCards />
        {/* <NavBar/> */}

        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/projects" element={<Projects />} />
          {/* <Route  path="/skills" element={<Skills />} /> */}
          <Route  path="/Education" element={<Education />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
