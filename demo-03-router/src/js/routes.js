import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Books from './components/books/Books';
import Projects from './components/projects/Projects';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Books} />
    <Route path="projects" component={Projects} />
    <Route path="books" component={Books} />
  </Route>
);
