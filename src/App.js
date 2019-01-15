import React, { Component } from 'react';
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/About";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/plans" component={Plans} />
            <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Header />
        <About /> 
        <Footer />
    </div>
    </Router>
      );
}




export default App;
