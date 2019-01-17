import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Tier1 from "../components/Tier1";


///P-CODE TO WORK///

const About = () => {
  return (

    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default About;