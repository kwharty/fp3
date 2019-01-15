import React, { Component } from 'react';
import About from "./components/About"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/About";
import './App.css';
//sdvgdfb
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
        </Wrapper>
        <Header />
        <About />
        <Footer />
      </div>

    </Router>
  );
}




export default App;
