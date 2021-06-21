import React from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#ffffff00",
    boxShadow: "none",
    color: "black",
    display: "flex",
    alignItems: "flex-end",
    paddingRight: "5em",
    position: "fixed",
  },
  navlinks: {
    color: "black",
    border: "2px dashed crimson",
    padding: "0.3em",
    margin: "0.5em",
    textDecoration: "none",
    "&:hover": {
      boxShadow: "4px 2px 1px crimson",
    },
    backgroundColor: "white",
  },
});

export default function Hook() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Link
            className={classes.navlinks}
            component={NavLink}
            exact
            activeClassName="active"
            to="/"
          >
            01. Home
          </Link>
          <Link
            className={classes.navlinks}
            component={NavLink}
            activeClassName="active"
            to="/about"
          >
            02. About
          </Link>
          <Link
            className={classes.navlinks}
            component={NavLink}
            activeClassName="active"
            to="/work"
          >
            03. Work/Projects
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
