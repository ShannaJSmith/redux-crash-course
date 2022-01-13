import store from './store';
import { bugAdded, bugResolved } from './actions';


// function gets called everytime the state of store changes
// UI should subscribed so they get notified when the state of store changes
store.subscribe(() => {
  console.log("Store changed~", store.getState());
})

// user may nagivate away from page. new page doesn't have ui componenet so subscription not needed
// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed~", store.getState());
// })

//dispatch action for adding bug
store.dispatch(bugAdded("Bug1"));
store.dispatch(bugResolved(1));

// unsubscribe(); <- only one msg will log now

//dispatch action for removing bug
store.dispatch({
  type: actions.REMOVE_BUG,
  payload: {
    id: 1
  }
})

console.log("store", store.getState());

// dispatch internal code:
// state = reducer(state, action)
// notify the subscribers