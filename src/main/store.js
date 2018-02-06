
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { applyMiddleware, createStore } from 'redux';

import reducers from './reducers';

const devTools  = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);
