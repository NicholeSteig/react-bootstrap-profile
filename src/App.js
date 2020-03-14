import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import Contact from "./Pages/Contact";
// import Portfolio from "./Pages/Portfolio";
import Navbar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} /> */}
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
