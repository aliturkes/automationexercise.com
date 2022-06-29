import axios from 'axios'

export const API = axios.create({
   baseURL: 'https://b2bdevice.tk/api',
   //  baseURL: 'http://localhost:3000/api'
})


const devices = "/devices"
const users = "/users"
const reset = "/reset-password"
const change = "/change-password"





// #region ---------------------------- TOKEN --------------------------------//


const token = () => JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.authReducer)?.token


// #endregion



// #region ---------------------------- AUTH --------------------------------//



export function login(data) {
   return dispatch => {
      dispatch({
         type: "LOGIN",
         payload: API.post(users + "/login", data)
      }).catch(err => {console.log(err.response.data.error.message)})
   }
}



export function register(data) {
   return dispatch => {
      dispatch({
         type: "REGISTER",
         payload: API.post(users, data)
      })
   }
}


export function logout() {

   setTimeout(() => { localStorage.removeItem("persist:root"); }, 1000);

   return dispatch => {
      dispatch({
         type: "LOGOUT",
         payload: API.post(users + "/logout?access_token=" + token().id)
      })
   }
}


export function changePassword(data) {
   return dispatch => {
      dispatch({
         type: "CHANGE_PASSWORD",
         payload: API.post(users + change, data)
      })
   }
}



export function resetPassword(data) {
   return dispatch => {
      dispatch({
         type: "RESET_PASSWORD",
         payload: API.post(users + reset, data)
      })
   }
}


export function clear() {

   setTimeout(() => { localStorage.removeItem("persist:root"); }, 1000);

   return dispatch => {
      dispatch({
         type: "CLEAR",
         payload: ""
      })
   }
}



// #endregion



// #region ---------------------------- ADMIN-DEVICES --------------------------------//



export function getDevices(token) {
   return dispatch => {
      let query = { include: { relation: "user", scope: { fields: ['company'] } } }
      dispatch({
         type: "GET_DEVICES",
         payload: API.get(devices + "?access_token=" + token.id + "&filter=" + JSON.stringify(query))
      }).catch(err => { err.response.status === 401 && dispatch(logout()) })
   }
}



export function postDevices(data) {
   return dispatch => {
      dispatch({
         type: "POST_DEVICES",
         payload: API.post(devices + "?access_token=" + token().id, data)
      })
   }
}



export function putDevices(data) {
   return dispatch => {
      dispatch({
         type: "PUT_DEVICES",
         payload: API.put(devices + "/" + data.id + "?access_token=" + token().id, data)
      }).catch(err => { err.response.status === 401 && dispatch(logout()) })
   }
}


export function delDevices(id) {
   return dispatch => {
      dispatch({
         type: "DEL_DEVICES",
         payload: API.delete(devices + "/" + id + "?access_token=" + token().id)
      })
   }
}

// #endregion



//--------------------------------- ADMIN-USERS --------------------------------//



export function getUsers(token) {
   return dispatch => {
      dispatch({
         type: "GET_USERS",
         payload: API.get(users + "?access_token=" + token.id)
      }).catch(err => { err.response.status === 401 && dispatch(logout()) })
   }
}


// https://b2bdevice.tk/api/users/2?access_token=548OWrq1q9QXrbiYLB4FbiV80CcbqfOGtdpKzRgdwL7FyEwMXj8ICXwwR6Cf8O3l

export function putUsers(data) {
   return dispatch => {
      dispatch({
         type: "PUT_USERS",
         payload: API.put(users + "/" + data.id, data)
      })
   }
}

// https://b2bdevice.tk/api/users/4?access_token=548OWrq1q9QXrbiYLB4FbiV80CcbqfOGtdpKzRgdwL7FyEwMXj8ICXwwR6Cf8O3l

export function delUsers(id) {
   return dispatch => {
      dispatch({
         type: "DEL_USERS",
         payload: API.delete(users + "/" + id)
      })
   }
}



// #endregion



// #region ---------------------------- USER --------------------------------//


// https://b2bdevice.tk/api/users/1/devices?access_token=548OWrq1q9QXrbiYLB4FbiV80CcbqfOGtdpKzRgdwL7FyEwMXj8ICXwwR6Cf8O3l

export function getDevice(token) {

   return dispatch => {
      let query = { where: { or: [{ deleted: null }, { deleted: false }] } }
      dispatch({
         type: "GET_DEVICE",
         payload: API.get(users + "/" + token.userId + devices + "?access_token=" + token.id + "&filter=" + JSON.stringify(query))
      }).catch(err => { err.response.status === 401 && dispatch(logout()) })
   }
}


export function postDevice(data) {
   return dispatch => {
      dispatch({
         type: "POST_DEVICE",
         payload: API.post(users + "/" + token().userId + devices + "?access_token=" + token().id, data)
      })
   }
}

// https://b2bdevice.tk/api/users/1/devices/4?access_token=548OWrq1q9QXrbiYLB4FbiV80CcbqfOGtdpKzRgdwL7FyEwMXj8ICXwwR6Cf8O3l

export function putDevice(data) {
   return dispatch => {
      dispatch({
         type: "PUT_DEVICE",
         payload: API.put(users + "/" + token().userId + devices + "/" + data.id + "?access_token=" + token().id, data)
      })
   }
}


export function delDevice(id) {
   return dispatch => {
      dispatch({
         type: "DEL_DEVICE",
         payload: API.put(users + "/" + token().userId + devices + "/" + id + "?access_token=" + token().id, { deleted: true })
      }).then(res => { console.log(res) })
   }
}


// #endregion