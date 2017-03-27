import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import routes from "./routes";

import App from './components/App';
import Books from './components/books/Books';
import Projects from './components/projects/Projects';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  app
);
