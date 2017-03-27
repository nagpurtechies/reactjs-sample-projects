import React from "react";
import Books from "./books/Books";
import Projects from "./projects/Projects";

export default class App extends React.Component {
  render() {
    return (
    	<div>
        <h2>React Components</h2>
        <Books />
        <Projects />
      </div>
    );
  }
}
