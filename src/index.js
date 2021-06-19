import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";

import Home from "./views/Home";
import About from "./views/About";
import Work from "./views/Work";

const routing = (
  <Router>
    <div>
      <Header />
      <Route path exact="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
