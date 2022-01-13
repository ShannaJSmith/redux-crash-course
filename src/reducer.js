// [] <- Store (initial state is the empty array)
let lastId = 0;

// purpose of reducer is to return new state based on the action:
export default function reducer(state = [], action) {
  if (action.type === 'ADD_BUG')
    // return new state
    return [
      ...state, // copy bugs in current state
      // then add new bug object
      {
        id: ++lastId, // every time we add a bug we will increment the id
        description: action.payload.description,
        resolved: false
      },
    ];
  else if (action.type === 'REMOVE_BUG')
    // return a new array with all the bugs except the one with the given id
    return state.filter((bug) => bug.id !== action.payload.id)
  // return current state if the above action doesn't exist
  return state;
}

// this reducer is a pure function