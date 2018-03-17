import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";

import "./App.css";
import "antd/dist/antd.min.css";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {/* <Route exact path="/docs" component={Docs} /> */}
      {/* <Route exact path="/upload" component={Upload} /> */}
    </div>
  </Router>
);

export default App;
