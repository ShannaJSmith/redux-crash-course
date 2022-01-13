// []
let lastId = 0;

function reducer(state, action) {
  if (action.type === 'ADD_BUG')
  return [
    ...state,
    {
      id: ++lastId,
      description: action.payload.description,
      resolved: false
    }
  ];
  else if (action.type === 'REMOVE_BUG')
    return state.filter(bug => bug.id !== action.payload.id)
    return state;
}