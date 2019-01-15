import React, { Component } from 'react';
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/About";
import './App.css';
import Tier2 from "./components/Tier2";

<<<<<<< HEAD
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

=======







class App extends Component { 
  render() {
    return (
      <div>
      <Tier2 />

      <div className="masthead container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
        <h1 className="mx-auto my-0 text-uppercase headerAutoBongs ">AutoBongs</h1>
        <h2 className="text-white-50 mx-auto mt-2 mb-5">The Ultimate Monthly ######### for Glass Collectors </h2>
        <a href="pages/login.html" class="btn btn-primary js-scroll-trigger ">Get Started</a>
      </div>
    </div>
    </div>
>>>>>>> e9a16d8f2ea58a8bab8b2b1392afe5b6ba3c9804



export default App;
