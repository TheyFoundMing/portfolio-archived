import React, { useState, useRef, useEffect } from "react";
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
    padding: "1em 0.5em 0em 1.25em",
    overflow: "hidden",
  },

  items: {
    position: "relative",
  },
});

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => (ref.current = value), [value]);
  return ref.current;
};

const Tree = ({ children, title, defaultOpen = false }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(defaultOpen);
  const previous = usePrevious(open);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: open ? viewHeight : 0,
      opacity: open ? 1 : 0,
      y: open ? 0 : 20,
    },
  });

  const itemsProps = useSpring({
    to: {
      bottom: open ? 0 : viewHeight,
      opacity: open ? 1 : 0,
    },
    from: {
      bottom: open ? viewHeight : 0,
      opacity: open ? 0 : 1,
    },
  });

  return (
    <div>
      <div className={classes.title}>
        <img
          src={open ? minImg : closeImg}
          alt="toggle"
          onClick={() => setOpen(!open)}
        />
        <span>{title}</span>
      </div>
      <animated.div
        className={classes.content}
        style={{
          opacity,
          height: open && previous === open ? "auto" : height,
        }}
      >
        <animated.div className={classes.items} style={itemsProps} ref={ref}>
          {children}
        </animated.div>
      </animated.div>
    </div>
  );
};

export default Tree;
