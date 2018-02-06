import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import Router from './main/routes';

import { store } from './main/store'

ReactDOM.render(
  <Provider store={store} >
    <Router />
  </Provider >
  , document.getElementById('root'));
registerServiceWorker();
