import React from "react";
import { Link } from "react-router";

export default class App extends React.Component {

  render() {
    return (
    	<div>
        <h1>React Routes</h1>
        <div>
          <Link to="books">Books</Link> |
          <Link to="projects">Projects</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
