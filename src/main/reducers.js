import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

import BeerReducers from '../beer/BeerReducers';
import TabReducers from '../common/tab/tabReducers';

const rootReducers = combineReducers({
  beers: BeerReducers,
  toastr: toastrReducer,
  tab: TabReducers
});

export default rootReducers;