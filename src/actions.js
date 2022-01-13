// action creator
import * as actions from './actionTypes'

// TWO WAYS:
// export function bugAdded(description) {
//   return {
//     type: actions.ADD_BUG,
//     payload: {
//       description: "Bug1"
//     }
//   }
// }

export const bugAdded = (description) => ({
  type: actions.ADD_BUG,
  payload: {
    // description: description, // use shorthand syntax
    description
  }
})

export const bugResolved = id => ({
  type: actions.RESOLVE_BUG,
  payload: {
    id // shorthand
  }
})
