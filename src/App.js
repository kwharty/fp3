import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Tier2 from "./components/Tier2";
import Tier1 from "./components/Tier1";
import Tier3 from "./components/Tier3";
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
        <Tier1 />
        <Tier2 />
        <Tier3 />
        <Footer />
    </div>
    </Router>
      );
}




export default App;
