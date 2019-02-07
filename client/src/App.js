import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Checkout1 from "./components/Checkout1";
import Checkout2 from "./components/Checkout2";
import Checkout3 from "./components/Checkout3";


import './App.css';
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <Router>
      <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/plans" component={Plans} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Registration} />
            <Route exact path="/checkout1" component={Checkout1} />
            <Route exact path="/checkout2" component={Checkout2} />
            <Route exact path="/checkout3" component={Checkout3} />
            {/* <Route exact path="/users/:id" component={Users} /> */}

    </div>
    </Router>
      );
}




export default App;
