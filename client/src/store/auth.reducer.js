const INITIAL_STATE = {
   sending: false,
   isAuthenticated: false,
   token: {},
   message: "",
   error: "",
}



export default (state = INITIAL_STATE, { type, payload }) => {
   switch (type) {


      // #region --------------------------- REGISTER ------------------------------ //

      case "REGISTER_PENDING":
         return { ...state, sending: true }

      case "REGISTER_FULFILLED":
         return { ...state, message: payload.data.message, error: "", sending: false }

      case "REGISTER_REJECTED":
         return { ...state, error: payload.message, sending: false }



      // #region ---------------------------- LOGIN -------------------------------- //

      case "LOGIN_PENDING":
         return { ...state, error: "", sending: true }

      case "LOGIN_FULFILLED":
         return { ...state, token: payload.data, isAuthenticated: true, error: "", sending: false }

      case "LOGIN_REJECTED":
         return { ...state, error: "Kullanıcı adı yada şifre hatalı", sending: false }

      // #endregion



      case "LOGOUT_FULFILLED":
         return { sending: false, isAuthenticated: false, message: "", token: {}, error: "" }

      case "CLEAR":
         return { sending: false, isAuthenticated: false, message: "", token: {}, error: "" }


      // #endregion


      default:
         return state
   }
}
