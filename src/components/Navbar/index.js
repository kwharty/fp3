import React from "react";
// import { Link } from "react-router-dom";
import "./nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="navbar-brand" to="/">
        AutoBongs
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <div
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </div>
          </li>
          <li className="nav-item">
            <div
              to="/plans"
              className={window.location.pathname === "/plans" ? "nav-link active" : "nav-link"}
            >
              plans
            </div>
          </li>
          <li className="nav-item">
            <div
              to="/search"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
