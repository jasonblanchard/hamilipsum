import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/app';

export default (
  <Route path="/">
    <Route path="/:amount/:unit" component={App} />
    <IndexRoute component={App} />
  </Route>
);
