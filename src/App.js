import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Plans from "./pages/Plans";

import './App.css';

function App() {
  return (
    <Router>
      <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/plans" component={Plans} />
            <Route exact path="/contact" component={Contact} />
        
    </div>
    </Router>
      );
}




export default App;
