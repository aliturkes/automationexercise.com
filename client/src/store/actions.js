import axios from 'axios'

export const API = axios.create({
   baseURL: 'https://b2bdevice.tk/api',
   //  baseURL: 'http://localhost:5000/api'
})


const devices = "/devices"
const users = "/users"


// https://b2bdevice.tk/api/devices?access_token=548OWrq1q9QXrbiYLB4FbiV80CcbqfOGtdpKzRgdwL7FyEwMXj8ICXwwR6Cf8O3l



const token = () => {
   const { id } = JSON.parse(localStorage.getItem('token'));
   // console.log(id);
   return id;
}

const userId = () => {
   const { userId } = JSON.parse(localStorage.getItem('token'));
   // console.log(userId);
   return "/" + userId;
}


// #region ---------------------------- AUTH --------------------------------//



export function login(data) {
   return dispatch => {
      dispatch({
         type: "POST_LOGIN",
         payload: API.post(users + "/login", data)
      }).then(res => {
         res.value.data.id && localStorage.setItem("token", JSON.stringify(res.value.data))
      })
   }
}



export function register(data) {
   return dispatch => {
      dispatch({
         type: "POST_REGISTER",
         payload: API.post(users, data)
      })
   }
}


export function logout() {
   localStorage.removeItem("token");
   return dispatch => {
      dispatch({
         type: "LOGOUT",
         payload: API.post(users + "/logout" + "?access_token=" + token())
      })
   }
}



// #endregion



// #region ---------------------------- ADMIN-DEVICES --------------------------------//



export function getDevices() {
   return dispatch => {

      let query = { include: { relation: "user", scope: { fields: ['company'] } } }
      dispatch({
         type: "GET_DEVICES",
         payload: API.get(devices + "?access_token=" + token() + "&filter=" + JSON.stringify(query))
      })
   }
}



export function postDevices(data) {
   return dispatch => {
      dispatch({
         type: "POST_DEVICES",
         payload: API.post(devices + "?access_token=" + token(), data)
      })
   }
}



export function putDevices(data) {
   return dispatch => {
      dispatch({
         type: "PUT_DEVICES",
         payload: API.put(devices + "/" + data.id + "?access_token=" + token(), data)
      })
   }
}


export function delDevices(id) {
   return dispatch => {
      dispatch({
         type: "DEL_DEVICES",
         payload: API.delete(devices + "/" + id + "?access_token=" + token())
      })
   }
}

// #endregion



//--------------------------------- ADMIN-USERS --------------------------------//



export function getUsers() {
   return dispatch => {
      dispatch({
         type: "GET_USERS",
         payload: API.get(users + "?access_token=" + token())
      })
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

export function getDevice() {
   return dispatch => {
      dispatch({
         type: "GET_DEVICE",
         payload: API.get(users + userId() + devices + "?access_token=" + token())
      })
   }
}


export function postDevice(data) {
   return dispatch => {
      dispatch({
         type: "POST_DEVICE",
         payload: API.post(users + userId() + devices + "?access_token=" + token(), data)
      })
   }
}

// https://b2bdevice.tk/api/users/1/devices/4?access_token=548OWrq1q9QXrbiYLB4FbiV80CcbqfOGtdpKzRgdwL7FyEwMXj8ICXwwR6Cf8O3l

export function putDevice(data) {
   return dispatch => {
      dispatch({
         type: "PUT_DEVICE",
         payload: API.put(users + userId() + devices + "/" + data.id + "?access_token=" + token(), data)
      })
   }
}


export function delDevice(id) {
   return dispatch => {
      dispatch({
         type: "DEL_DEVICE",
         payload: API.delete(users + userId() + devices + "/" + id + "?access_token=" + token())
      }).then(res => { console.log(res) })
   }
}


// #endregion