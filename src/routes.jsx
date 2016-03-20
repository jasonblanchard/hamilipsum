import React from 'react';
import { IndexRoute, Route } from 'react-router';

import About from './components/About';
import App from './components/app';

export default (
  <Route path="/">
    <Route path="/:amount/:unit" component={App} />
    <Route path="/about" component={About} />
    <IndexRoute component={App} />
  </Route>
);
