import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import App from './app';
import Beer from '../beer/Beer';
import Home from '../home/home';
import BeerList from '../beer/BeerList';

export default props => (
  <Router history={ hashHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='/beer/(:id)' component={ Beer } />
      <Route path='/beerlist' component={ BeerList } />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)