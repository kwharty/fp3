import React from "react";
import "./about.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="masthead container d-flex h-100 align-items-center ihatelife" style={{
      margin:'50px'
    }}>
      <div className="mx-auto text-center">
        <h1 className="mx-auto my-0 text-uppercase headerAutoBongs ">AutoBongs</h1>
        <h2 className="text-white-50 mx-auto mt-2 mb-5">The Ultimate Monthly Subscription for Glass Collectors </h2>
        <Link
          to="/login">
          <button type="button"
          className="btn btn-primary">
          Create New Account
          </button>
            </Link>
      </div>
    </div>
  );
}

export default Header;