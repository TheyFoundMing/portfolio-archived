import React from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    backgroundColor: "white",
    boxShadow: "none",
    color: "black",
    display: "flex",
    alignItems: "flex-end",
    paddingRight: "5em",
  },
  navlinks: {
    color: "black",
    border: "2px solid black",
    padding: "0.2em",
    margin: "0.5em",
    textDecoration: "none",
    "&:hover": {
      boxShadow: "4px 2px 1px crimson",
    },
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
            Home
          </Link>
          <Link
            className={classes.navlinks}
            component={NavLink}
            activeClassName="active"
            to="/about"
          >
            About
          </Link>
          <Link
            className={classes.navlinks}
            component={NavLink}
            activeClassName="active"
            to="/work"
          >
            Work/Projects
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
