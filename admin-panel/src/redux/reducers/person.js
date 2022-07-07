export function persons (state = [], action) {
  switch (action.type) {
    case 'PERSONS':
      return action.payload

    default:
      return state
  }
}

export function person (state = {}, action) {
  switch (action.type) {
    case 'PERSON':
      return action.payload

    default:
      return state
  }
}
