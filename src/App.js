import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import './App.css';
import Tier2 from "./components/Tier2";
import Tier1 from "./components/Tier1";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Tier2 />
        <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
        </Wrapper>
        <Header />
        <Footer />
    </div>
    </Router>
      );
}




export default App;
