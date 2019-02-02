import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{
      background: '#bdc3c7',
      fontFamily: 'Exo'

    }}>
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }>
        AutoBongs
        </Link >
      <div>

        <ul className="navbar-nav" >
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/plans"
              className={window.location.pathname === "/plans" ? "nav-link active" : "nav-link"}
            >
              Plans
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          <li >
            <input className="nav-item" style={{
              position: 'relative', WebkitFilter: 'blur(0.75px) saturate(7)',
              float: "left",
              margin: '3px',
              fontFamily: 'Exo'

            }}
              type="text" placeholder="username" name="username"  >
            </input>
          </li>
          <li>
            <input className="nav-item" style={{
              position: 'relative', WebkitFilter: 'blur(0.75px) saturate(7)',
              float: "right",
              margin: "3px",

              fontFamily: 'Exo'


            }}
              type="password" placeholder="password" name="password">
            </input>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

