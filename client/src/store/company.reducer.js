const INITIAL_STATE = {
  device: [],
  loading: false,
  sending: false,
  error: null,

}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {



    case "GET_DEVICE_PENDING":
      return { ...state, loading: true }

    case "GET_DEVICE_FULFILLED":
      return { ...state, device: payload.data.reverse(), error: "", loading: false }

    case "GET_DEVICE_REJECTED":
      return { ...state, error: payload.message, loading: false }



    case "POST_DEVICE_PENDING":
      return { ...state, sending: true }

    case "POST_DEVICE_FULFILLED":
      return { ...state, device: [payload.data, ...state.device], sending: false }

    case "POST_DEVICE_REJECTED":
      return { ...state, error: payload.message, sending: false }



    case "PUT_DEVICE_PENDING":
      return { ...state, sending: true }

    case "PUT_DEVICE_FULFILLED":
      return { ...state, device: state.device.map(item => item.id === payload.data.id ? payload.data : item), sending: false }

    case "PUT_DEVICE_REJECTED":
      return { ...state, error: payload.message, sending: false }



    case "DEL_DEVICE_FULFILLED":
      return { ...state, device: state.device.filter(item => item.id !== payload.data.id), error: "" }


    default:
      return state
  }
}
