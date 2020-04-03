import popular from '../data/popular';
import {SEARCH_RESULTS} from './actions';
import {combineReducers} from 'redux';


 function popularMovies(state = popular, action) {
    console.log(state);
    return state;
}

function results(state = [], action) {
    switch (action.type) {
      case SEARCH_RESULTS:
        return action.results;
      default: return state;
    }
  }


const rootReducer = combineReducers({popularMovies, results});

export default rootReducer