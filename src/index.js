import C from './constants';
import appReducer, { suggestions } from './store/reducers';
import initialState from './initialState.json';

let state = initialState;

console.log(`

Initial State
===================
goal: ${state.goal}
resorts: ${JSON.stringify(state.allSkiDays)}
fetching: ${state.resortNames.fetching}
suggessions: ${state.resortNames.suggestions}
`)

state = appReducer(state, {
  type: C.SET_GOAL,
  payload: 2
})

state = appReducer(state, {
  type: C.ADD_DAY,
  payload: {
    "Resort": "Mt. Shasha",
    "date": "2016-12-12",
    "powder": false,
    "backcountry": true
  }
})

state = appReducer(state, {
  type: C.CHANGE_SUGGESTIONS,
  payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
})

console.log(`

Next State
===================
goal: ${state.goal}
resorts: ${JSON.stringify(state.allSkiDays)}
fetching: ${state.resortNames.fetching}
suggessions: ${state.resortNames.suggestions}
`)