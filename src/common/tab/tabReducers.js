import { TAB_ACTION } from '../../config/const';

const INITIAL_STATE = { selected: '' };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TAB_ACTION.TAB_SELECTED:
      return { ...state, selected: action.payload }
    default:
      return state
  }
};
