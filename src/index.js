import store from './store';

//dispatch action for adding bug
store.dispatch({
  type: "ADD_BUG",
  payload: {
    description: "Bug1"
  }
});

//dispatch action for removing bug
store.dispatch({
  type: "REMOVE_BUG",
  payload: {
    id: 1
  }
})

console.log("store", store.getState());