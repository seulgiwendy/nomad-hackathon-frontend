import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";

import Upload from "./components/Upload";
import Documents from "./components/Documents";

import "./reset.css";
import "./global.css";
import "./App.css";
import "antd/dist/antd.min.css";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Login} />
      <Route path="/upload" component={Upload} />
      <Route path="/docs" component={Documents} />
    </div>
  </Router>
);

export default App;
