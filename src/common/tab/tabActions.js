import { TAB_ACTION } from '../../config/const';

export function selectedTab(tabId) {
  console.log(tabId);
  return {
    type: TAB_ACTION.TAB_SELECTED,
    payload: tabId
  };
}; 