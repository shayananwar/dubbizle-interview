import { combineReducers } from 'redux';

const SEARCH = 'CHANGE_SEARCH';

export function changeSearch(search) {
  return {
    type: SEARCH,
    search,
  }
}

const defaultSearch = "";


function search(state = defaultSearch, action) {
	switch (action.type) {
	    case SEARCH:
	      return action.search;
	    default:
	      return state;
	}
}

const searchApp = combineReducers({
  search
});

export default searchApp;