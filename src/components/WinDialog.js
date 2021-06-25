import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    width: "70%",
    border: "2px solid firebrick",
    margin: "2.5em auto",
    boxShadow: "5px 5px 0px crimson",
    display: "flex",
    flexDirection: "column",
    "& img": {
      width: 125,
      margin: "2em",
    },
    borderRadius: "5px",
  },

  title: {
    height: "1em",
    padding: "0.5em",
    backgroundColor: "crimson",
    borderBottom: "2px solid firebrick",
    textShadow: "3px 3px 0px firebrick",
    color: "white",
    fontWeight: 800,
  },

  company: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  content: {
    padding: "1em",
    color: "black",
  },
});

function Experience(props) {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <div className={classes.title}>{props.data.title}</div>

      <div className={classes.company}>
        <img src={props.data.image} alt="logo" />
        <div>
          <p>{props.data.company}</p>
          <p>{props.data.location}</p>
          <p>{props.data.date}</p>
        </div>
      </div>
      <div className={classes.content}>{props.data.content}</div>
    </div>
  );
}

export default Experience;
