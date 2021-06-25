import React, { Component } from "react";

import Experience from "../components/Experience";
import Project from "../components/Project";

import Tree from "../components/Tree";
import TreeContent from "../components/TreeContent";

import { makeStyles } from "@material-ui/core";

import wmuImage from "../images/wmu.png";
import popImage from "../images/populix.png";
import weather from "../images/weatherss.png";
import fakebrock from "../images/fakebrockss.png";
import tictac from "../images/tictacss.png";

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

const Weather = {
  image: weather,
  title: "5 Days - Weather App",
  src: "https://theyfoundming.github.io/weather-app/",
};

const FakeBrock = {
  image: fakebrock,
  title: "Fake Brockhampton Website",
  src: "https://thefakebrockhampton.000webhostapp.com/",
};

const TicTac = {
  image: tictac,
  title: "Rock, Paper, Scissors",
  src: "https://theyfoundming.github.io/Tic-Tac-Toe/",
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

  const popContent = (
    <Tree title={Populix.title} child={<TreeContent data={Populix} />} />
  );
  const wmuContent = (
    <Tree title={Western.title} child={<TreeContent data={Western} />} />
  );

  return (
    <div>
      <Tree title={"Experience"} child={[popContent, wmuContent]} />
      {popContent}
      <h1>Personal Projects</h1>
      <div className={classes.projects}>
        <Project data={Weather} />
        <Project data={FakeBrock} />
        <Project data={TicTac} />
      </div>
    </div>
  );
}
