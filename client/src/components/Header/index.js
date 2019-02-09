import React from "react";
import "./about.css";
import { Link } from 'react-router-dom';
// import Background from "./valley.png";

function Header() {
  return (

    <div className="masthead container d-flex h-100 align-items-center ihatelife" style={{
      backgroundImage: "url(" + "https://st3.depositphotos.com/10409000/19150/v/600/depositphotos_191509552-stock-video-realistic-dry-ice-smoke-clouds.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      margin: '7%',
      opacity: 10
    }}
    >
      <div className="mx-auto text-center" style={{

      }} >



        <div className="" style={{


        }}>
          <h1 className="mx-auto my-0 text-uppercase newHeader1  r " style={{
            fontSize: '80px',
            textShadow: '2px 2px 4px grey',
            opacity: "100%",


          }} >
            Automatic Glass</h1>
        </div>
        <br></br>
        <h2 className="text-white  mx-auto  " style={{
          fontSize: '40px',
          color: 'white',
          textShadow: '2px 2px 4px black',
          maxWidth: "60rem",
          padding: "50px",
          borderStyle: "groove",
          borderRadius: "8px",
          border: "5px solid white",


        }}>

          The best no hassle, bang for your buck, professionally handpicked bong.
          <br></br>
          <br></br>

          this is THE ultimate monthly subscription for glass collectors and makes the perfect gift.
<br></br>
<br></br>


          <Link
            to="/about">
            <button type="button"
              className="btn btn-block btn-primary philBTN" style={{
                fontFamily: 'Exo'
              }}>
              <h4 className="" style={{
                fontSize: "30px",
              }} > Learn more</h4>
            </button>
          </Link>
        </h2>
        <br></br>
        <h1>OR</h1>

<p className="text-white" style={{
fontSize: "20px",
}}>
take the next step in upping your glass game by...
</p>

        <br></br>
        <Link
          to="/login">
          <button type="button"
            className="btn btn-block btn-primary philBTN" style={{
              fontFamily: 'Exo',
            }}>
            <h4 className="" style={{
              fontSize: "30px",
            }} > Create New Account</h4>
          </button>
        </Link>
        <br></br><br></br>

      </div>
    </div>
  );
}

export default Header;
              
              