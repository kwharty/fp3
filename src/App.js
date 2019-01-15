import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tier2 from "./components/Tier2";
import Tier1 from "./components/Tier1";








class App extends Component { 
  render() {
    return (
      <div>
        <Tier1 />
      <Tier2 />

      <div className="masthead container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
        <h1 className="mx-auto my-0 text-uppercase headerAutoBongs ">AutoBongs</h1>
        <h2 className="text-white-50 mx-auto mt-2 mb-5">The Ultimate Monthly ######### for Glass Collectors </h2>
        <a href="pages/login.html" class="btn btn-primary js-scroll-trigger ">Get Started</a>
      </div>
    </div>
    </div>





    );
  }
}

export default App;
