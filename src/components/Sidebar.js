import React from "react";

import { makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  sideBar: {
    width: "22em",
    height: "100%",
    backgroundColor: "crimson",
  },

  sideLink: {
    color: "white",
  },

  contact: {
    display: "flex",
    flexDirection: "column",
  },
});

function Sidebar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.sideBar}>
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
