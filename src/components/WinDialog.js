import React from "react";
import { makeStyles } from "@material-ui/core";

import closeImg from "../images/closewhite.png";
import minImg from "../images/minwhite.png";
import restoreImg from "../images/restorewhite.png";

const useStyles = makeStyles({
  box: {
    width: "100%",
    border: "2px solid firebrick",
    margin: "2.5em 0",
    boxShadow: "5px 5px 0px crimson",
    borderRadius: "5px",
    color: " #2f2f2f",

    "& h4": {
      color: "firebrick",
    },
  },

  title: {
    display: "flex",
    padding: "0.5em",
    justifyContent: "flex-end",

    backgroundColor: "crimson",
    borderBottom: "2px solid firebrick",
    textShadow: "3px 3px 0px firebrick",
    "& img": {
      margin: "0em 0.25em",
      height: "1.3em",
    },
  },

  content: {
    padding: "1em",
  },
});

function Experience(props) {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <img src={minImg} alt="" />
        <img src={restoreImg} alt="" />
        <img src={closeImg} alt="" />
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

export default Experience;
