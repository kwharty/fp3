import React, { Component } from "react";
import { Link } from "react-router-dom";
import Api from "../../services/api";
import axios from "axios";
import "./nav.css";

class NavBar extends Component {

  state = {
    userName: "",
    userPwd: ""
  };



  handleInputChange = event => {
    // Getting the calue and name of the input
    //  which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "userPwd") {
        value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
        [name]: value
    });
};


  handleFormSubmit = event => {
    event.preventDefault();

    // const user = this.state.userName;
    const userToLogin={
      userName: this.state.userName,
      password: this.state.password
    }

    return Api.login(userToLogin)
      .then(foundUser=>{
        console.log(foundUser);
        alert("Welcome back " + foundUser.userName)
        // this.props.history.push("/")
      })
      .catch(err=>alert("Invalid username or password")
      )



  

  };

  render() {
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
Automatic Glass          </Link >
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
                position: 'absolute', WebkitFilter: 'blur(0.75px) saturate(7)',
                // float: "left",
                margin: '3px',
                fontFamily: 'Exo',
                right:'600px'
  
              }}
                value={this.state.userName}
                name="userName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Username"
                  >
              </input>
            </li>
            <li>
              <input className="nav-item" style={{
                position: 'absolute', WebkitFilter: 'blur(0.75px) saturate(7)',
                // float: "right",
                margin: "3px",
                right:'400px',
                fontFamily: 'Exo'
  
  
              }}
                value={this.state.userPwd} 
                name="userPwd"
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password">
              </input>
            </li>
          </ul>
        </div>
      <button type="button" className="btn btn-success" id="elButton" style={{
                position: 'absolute', 
                // float: "right",
                margin: "-1px",
                right:'75px',
                fontFamily: 'Exo',
                // backgroundColor: 'rgba(129, 106, 134, 0.432)',
                borderRadius: '4px',
  
  
              }}
                                                    onClick={this.handleFormSubmit}>Login</button>
      </nav>
      
    );
  }
}



export default NavBar;


