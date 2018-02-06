import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

import BeerReducers from '../beer/BeerReducers';

const rootReducers = combineReducers({
  beers: BeerReducers,
  toastr: toastrReducer
});

export default rootReducers;