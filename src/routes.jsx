import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/app';

export default (
  <Route path="/">
    <Route path="/:quantity/:unit" component={App} />
    <IndexRoute component={App} />
  </Route>
);
