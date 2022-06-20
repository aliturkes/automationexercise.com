const INITIAL_STATE = {
   sending: false,
   isAuthenticated: false,
   user: {},
   message: "",
   error: "",
}



export default (state = INITIAL_STATE, { type, payload }) => {
   switch (type) {


      // #region --------------------------- REGISTER ------------------------------ //

      case "POST_REGISTER_PENDING":
         return { ...state, sending: true }

      case "POST_REGISTER_FULFILLED":
         return { ...state, message: payload.data.message, error: "", sending: false }

      case "POST_REGISTER_REJECTED":
         return { ...state, error: payload.message, sending: false }



      // #region ---------------------------- LOGIN -------------------------------- //

      case "POST_LOGIN_PENDING":
         return { ...state, sending: true }

      case "POST_LOGIN_FULFILLED":
         return { ...state, user: payload.data, isAuthenticated: true, error: "", sending: false }

      case "POST_LOGIN_REJECTED":
         return { ...state, error: payload.message, sending: false }

      // #endregion



      case "LOGOUT_FULFILLED":
         return { sending: false, isAuthenticated: false, message: "", user: {}, error: "" }

      case "LOGOUT_REJECTED":
         return { sending: false, isAuthenticated: false, message: "", user: {}, error: "" }


      // #endregion


      default:
         return state
   }
}
