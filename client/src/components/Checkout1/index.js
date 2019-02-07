import React from "react";
import "./about.css";
import Tier1 from "./Teir1.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer"



const Checkout1 = () => {
  return (

    <wrapper>
      <Navbar />
      <div style={{
        margin: '150px'
      }}>

        <img className="d-block w-100" src={Tier1} alt="GLASS10" style={{

          width: "100%",
          height: "100%"

        }} />

      </div>

      <Footer />
    </wrapper>

  );

}

export default Checkout1;