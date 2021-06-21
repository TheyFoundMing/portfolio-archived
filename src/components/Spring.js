import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure } from "react-use";

import { makeStyles } from "@material-ui/core";

import closeImg from "../images/close.png";
import minImg from "../images/min.png";

const useStyles = makeStyles({
  title: {
    display: "flex",
    alignItems: "center",
    "& span": {
      marginLeft: "0.5em",
    },
  },
  content: {
    marginLeft: "0.6em",
    borderLeft: "2px dashed black",
    padding: "0.5em 1em",
  },

  items: {
    position: "relative",
  },
});

function Spring() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [ref, { height }] = useMeasure();
  const boxProps = useSpring({
    to: {
      height: open ? 200 : 0,
    },
    from: {
      height: open ? 0 : 200,
    },
  });

  const itemsProps = useSpring({
    to: {
      top: open ? 0 : 50,
      opacity: open ? 1 : 0,
    },
    from: {
      top: open ? 50 : 0,
      opacity: open ? 0 : 1,
    },
  });

  return (
    <div>
      <div className={classes.title} onClick={() => setOpen(!open)}>
        <img src={open ? minImg : closeImg} alt="toggle" />
        <span>The world</span>
      </div>
      <animated.div className={classes.content} style={boxProps}>
        <animated.div className={classes.items} style={itemsProps}>
          This is either the content, or another tree
        </animated.div>
      </animated.div>
    </div>
  );
}

export default Spring;
