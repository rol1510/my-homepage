import React from "react";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";

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
        <NavBar />
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path="/" component={LandingPage} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <p>Footer</p>
    </div>
  );
}

export default App;
