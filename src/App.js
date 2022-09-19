import "./App.css";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurTeam from "./Pages/OurTeam";
import Privacy from "./Pages/Privacy";
import Tc from "./Pages/Tc";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/pp" element={<Privacy />} />
          <Route path="/tc" element={<Tc />} />
        </Routes>
        {/* <FooterBottom /> */}
      </Router>
    </div>
  );
}

export default App;
