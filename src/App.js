import React from "react";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer position="top-center" />

      <Router>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <div className="flex-grow">
            <Switch>
              <Route exact path="/test" component={Test} />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route>
                <ErrorPage message="404, Page not found" />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
