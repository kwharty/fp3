import React from "react";
import "./about.css";
import tier3 from "./teir3.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer"


const Checkout3 = () => {
  return (
    <wrapper>
      <Navbar />
      <div style={{
        margin: '150px'
      }}>

        <img className="d-block w-100" src={tier3} alt="GLASS10" style={{

          width: "100%",
          height: "100%"

        }} />

      </div>

      <Footer />
    </wrapper>
  );

}

export default Checkout3;