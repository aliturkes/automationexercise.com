
import axios from 'axios'

export const API = axios.create({ baseURL: 'https://b2bdevice.tk/explorer/' })









// #region ---------------------------- INSTUTION --------------------------------//



export function getInstitution() {
   return dispatch => {
      dispatch({
         type: "GET_DEVICE",
         payload: API.get(url_ins + token_id())
      })
   }
}



export function putInstitution(data) {
   return dispatch => {
      dispatch({
         type: "PUT_DEVICE",
         payload: API.put(url_ins + data._id, data)
      })
   }
}


export function delInstitution(id) {
   return dispatch => {
      dispatch({
         type: "DEL_DEVICE",
         payload: API.delete(url_ins + id)
      })
   }
}



// #endregion