import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar/navbar.js";
import Footer from "./components/Footer/footer.js";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
    <Footer />
    </div>
    </Router>
  );
}

export default App;
