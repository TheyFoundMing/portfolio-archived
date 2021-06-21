import React from "react";

import { makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";

import profile from "../images/profile.jpeg";

const useStyles = makeStyles({
  sideBar: {
    width: "14em",
    height: "100%",
    backgroundColor: "crimson",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2em",
    position: "fixed",
  },

  sideLink: {
    color: "white",
    marginTop: "0.5em",
    textShadow: "3px 3px firebrick",
    fontWeight: 800,
  },

  name: {
    fontSize: "2em",
    textAlign: "center",
    marginTop: "0.5em",
  },

  contact: {
    display: "flex",
    flexDirection: "column",
    margin: "2.5em 2.5em 0em 0em",
  },

  profile: {
    width: "10em",
    borderRadius: "5px",
    border: "4px dashed white",
    boxShadow: "9px 9px firebrick",
  },
});

function Sidebar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.sideBar}>
      <img className={classes.profile} src={profile} alt="profile" />

      <span className={`${classes.sideLink} ${classes.name}`}>
        Michaella Magtibay
      </span>
      <div className={classes.contact}>
        <Link
          className={classes.sideLink}
          href="https://github.com/TheyFoundMing"
        >
          Github
        </Link>
        <Link
          className={classes.sideLink}
          href="https://www.linkedin.com/in/michaella-magtibay-7851421b2/"
        >
          LinkedIn
        </Link>
        <Link className={classes.sideLink} href="#" onClick={preventDefault}>
          Resume/CV
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
