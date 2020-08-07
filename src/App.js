import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar/navbar.js";
import Footer from "./components/Footer/footer.js";
import Wrapper from "./components/Wrapper/wrapper.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
