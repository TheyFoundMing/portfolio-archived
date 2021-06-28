import React, { Component } from "react";
import Project from "../components/Project";

import Tree from "../components/Tree";
import TreeContent from "../components/TreeContent";

import { makeStyles } from "@material-ui/core";

import wmuImage from "../images/wmu.png";
import popImage from "../images/populix.png";
import Experience from "../components/WinDialog";

// work experience

const Populix = {
  title: "Software Developer Intern (Remote)",
  company: "Populix",
  location: "Jakarta, Indonesia",
  date: "February 2021 - May 2021",
  image: popImage,
  content:
    "Worked on both the frontend and backend of the company's researcher API to implement filters for their product database in an agile scrum environment",
};

const Western = {
  title: "Grading Assistant",
  company: "Western Michigan University",
  location: "Kalamazoo, Michigan",
  date: "January 2021 - May 2021",
  image: wmuImage,
  content:
    "Collaborated with professors in a fast-paced environment, graded student assignments and tests, facilitated office hours for students",
};

const useStyles = makeStyles({
  projects: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    margin: "auto",
  },
});

export default function Work() {
  const classes = useStyles();

  return (
    <div>
      <Tree title={"Experience"}>
        <Tree title={"Populix"}>
          <TreeContent data={Populix} />
        </Tree>
        <Tree title={"Western"}>
          <TreeContent data={Western} />
        </Tree>
      </Tree>
    </div>
  );
}
