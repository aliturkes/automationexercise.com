const INITIAL_STATE = {
  devices: [],
  users: [],
  loading: false,
  sending: false,
  error: null,
}

export default (state = INITIAL_STATE, { type, payload }) => {

  switch (type) {

    case "GET_DEVICES_PENDING":
      return { ...state, loading: true }

    case "GET_DEVICES_FULFILLED":
      return { ...state, devices: payload.data.reverse(), error: "", loading: false }

    case "GET_DEVICES_REJECTED":
      return { ...state, error: payload.message, loading: false }



    case "POST_DEVICES_PENDING":
      return { ...state, sending: true }

    case "POST_DEVICES_FULFILLED":
      return { ...state, devices: [payload.data, ...state.devices], sending: false }

    case "POST_DEVICES_REJECTED":
      return { ...state, error: payload.message, sending: false }



    case "PUT_DEVICES_PENDING":
      return { ...state, sending: true }

    case "PUT_DEVICES_FULFILLED":
      return { ...state, devices: state.devices.map(item => item.id === payload.data.id ? payload.data : item), sending: false }

    case "PUT_DEVICES_REJECTED":
      return { ...state, error: payload.message, sending: false }



    case "DEL_DEVICES_FULFILLED":
      return { ...state, devices: state.devices.filter(item => item.id !== payload.data.id), error: "" }



    //--------------------------------- USERS --------------------------------//


    case "GET_USERS_PENDING":
      return { ...state, loading: true }

    case "GET_USERS_FULFILLED":
      return { ...state, users: payload.data.reverse(), error: "", loading: false }

    case "GET_USERS_REJECTED":
      return { ...state, error: payload.message, loading: false }



    case "POST_USERS_PENDING":
      return { ...state, sending: true }

    case "POST_USERS_FULFILLED":
      return { ...state, users: [payload.data, ...state.users], sending: false }

    case "POST_USERS_REJECTED":
      return { ...state, error: payload.message, sending: false }



    case "PUT_USERS_PENDING":
      return { ...state, sending: true }

    case "PUT_USERS_FULFILLED":
      return { ...state, users: state.users.map(item => item._id === payload.data._id ? payload.data : item), sending: false }

    case "PUT_USERS_REJECTED":
      return { ...state, error: payload.message, sending: false }



    case "DEL_USERS_FULFILLED":
      return { ...state, users: state.users.filter(item => item._id !== payload.data._id), error: "" }


    case "LOGOUT_FULFILLED":
      return { devices: [], users: [], loading: false, sending: false, error: null }

    case "LOGOUT_REJECTED":
      return { devices: [], users: [], loading: false, sending: false, error: null }


    default:
      return state
  }
}
