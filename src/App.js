import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tier2 from "./components/Tier2";
import Navbar from "./components/Navbar"







class App extends Component { 
  render() {
    return (
      <div>
      <Tier2 />
      <Navbar />

      <div className="masthead container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
        <h1 className="mx-auto my-0 text-uppercase headerAutoBongs ">AutoBongs</h1>
        <h2 className="text-white-50 mx-auto mt-2 mb-5">The Ultimate Monthly Subscription for Glass Collectors </h2>
        <a href="pages/login.html" class="btn btn-primary js-scroll-trigger ">Get Started</a>
      </div>
    </div>
    </div>





    );
  }
}

export default App;
