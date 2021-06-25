import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({});

function TreeContent(props) {
  const classes = useStyles();

  return (
    <div>
      <div>{props.data.date}</div>
      <div>{props.data.content}</div>
      <div>{props.data.techStack}</div>
    </div>
  );
}

export default TreeContent;
