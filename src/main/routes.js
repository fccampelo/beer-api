import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import App from './app';
import Beer from '../beer/Beer';
import BeerList from '../beer/BeerList';

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={BeerList} />
      <Route path='/(:id)' component={Beer} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)