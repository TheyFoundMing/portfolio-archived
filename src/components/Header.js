import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar></Toolbar>
        </AppBar>
      </div>
    );
  }
}
