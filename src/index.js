import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

import { Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./views/Home";
import Projects from "./views/Projects";
import Work from "./views/Work";

const routing = (
  <div className="index-wrapper">
    <Router>
      <Sidebar />
      <div className="header-and-main">
        <Header />
        <div className="views">
          <Route path exact="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/work" component={Work} />
        </div>
      </div>
    </Router>
  </div>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
