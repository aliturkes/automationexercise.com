
import axios from 'axios'

export const API = axios.create({ baseURL: 'https://b2bdevice.tk/api' })


const devices = "/devices"
const users = "/users/"


// https://b2bdevice.tk/api/devices?access_token=548OWrq1q9QXrbiYLB4FbiV80CcbqfOGtdpKzRgdwL7FyEwMXj8ICXwwR6Cf8O3l



const token = () => {
   const { id } = JSON.parse(localStorage.getItem('token'));
   // console.log(id);
   return id;
}

const userId = () => {
   const { userId } = JSON.parse(localStorage.getItem('token'));
   // console.log(userId);
   return userId;
}



// #region ---------------------------- ADMIN --------------------------------//



export function getDevices() {
   return dispatch => {
      dispatch({
         type: "GET_DEVICES",
         payload: API.get(devices + "?access_token=" + token())
      })
   }
}



export function putDevices(data) {
   return dispatch => {
      dispatch({
         type: "PUT_DEVICES",
         payload: API.put(devices + data._id, data)
      })
   }
}


export function delDevices(id) {
   return dispatch => {
      dispatch({
         type: "DEL_DEVICES",
         payload: API.delete(devices + id)
      })
   }
}



// #endregion



// https://b2bdevice.tk/api/users/1/devices?access_token=548OWrq1q9QXrbiYLB4FbiV80CcbqfOGtdpKzRgdwL7FyEwMXj8ICXwwR6Cf8O3l


// #region ---------------------------- USER --------------------------------//



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
         type: "PUT_DEVICE",
         payload: API.post(users + userId() + devices + "?access_token=" + token(), data)
      })
   }
}



export function putDevice(data) {
   return dispatch => {
      dispatch({
         type: "PUT_DEVICE",
         payload: API.put(users + data._id, data)
      })
   }
}


export function delDevice(id) {
   return dispatch => {
      dispatch({
         type: "DEL_DEVICE",
         payload: API.delete(users + id)
      })
   }
}



// #endregion
