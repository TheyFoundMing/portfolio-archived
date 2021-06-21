import React from "react";

import { makeStyles } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Project(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={props.data.image} />
        <CardContent>this is a card</CardContent>
      </Card>
    </div>
  );
}

export default Project;
