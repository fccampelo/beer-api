import { BEER_ACTION } from '../config/const';

const INITIAL_STATE = {beersList: [], beer: []};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case BEER_ACTION.BEER_LIST:
      return {...state, beersList: action.payload.data}    
    case BEER_ACTION.FILTER_NAME:
      return {...state, beersList: action.payload.data}
    case BEER_ACTION.BEER:
      return {...state, beer: action.payload.data}
    default:
      return state  
  }
};
