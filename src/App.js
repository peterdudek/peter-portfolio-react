import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Header from "./components/Header/header.js";
import Footer from "./components/Footer/footer.js";
// import Detail from "./pages/Detail";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/peter-portfolio-react" component={About} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/projects" component={Projects} />
        {/* <Route exact path="/detail" component={Detail} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
