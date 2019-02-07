import React from "react";
import "./about.css";
import tier2 from "./teir2.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer"


const Checkout2 = () => {
  return (

    <wrapper>
      <Navbar />
      <div style={{
        margin: '150px'
      }}>

        <img className="d-block w-100" src={tier2} alt="GLASS10" style={{

          width: "100%",
          height: "100%"

        }} />

      </div>
      <Footer />
    </wrapper>

  );

}

export default Checkout2;