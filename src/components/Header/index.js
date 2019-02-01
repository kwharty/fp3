import React from "react";
import "./about.css";
import { Link } from 'react-router-dom';
import Background from "./valley.png";

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
      <div className="mx-auto text-center">
        <h1 className="mx-auto my-0 text-uppercase headerAutoBongs " style={{
          fontSize: '60px',
        }} >
        AutoBongs</h1>
        <h2 className="text-white-50 mx-auto mt-2 mb-5">The Ultimate Monthly Subscription for Glass Collectors </h2>
        <Link
          to="/login">
          <button type="button"
            className="btn btn-primary" style={{
              fontFamily: 'Exo'
            }}>
            Create New Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;