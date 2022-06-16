const INITIAL_STATE = {
  
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

  case "first":
    return { ...state, ...payload }

  default:
    return state
  }
}
