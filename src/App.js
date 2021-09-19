import React from "react";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Error404(props) {
  return (
    <div>
      <p>Error 404. Page not found Sorry!</p>
    </div>
  );
}

function Test(props) {
  return (
    <div>
      <p>Test page</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex flex-col h-screen">
          <NavBar />
          <div className="flex-grow">
            <Switch>
              <Route exact path="/test" component={Test} />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route component={Error404} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
