import React, { Component } from "react";
import Tree from "../components/Tree";

const Container = (props) => {
  return <div>{props.children}</div>;
};

export default class About extends Component {
  render() {
    return (
      <div>
        About
        <Tree
          child={
            <div>
              <Tree child={"This is my child"} />
              <Tree child={"This is my child"} />
            </div>
          }
        />
        <Container>
          <Tree child={"This is my child"} />
          <Tree child={"This is my child"} />
        </Container>
      </div>
    );
  }
}
