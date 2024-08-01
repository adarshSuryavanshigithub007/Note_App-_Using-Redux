import axios from "axios";
import { BASE_URL } from "../config/API_BASE_URL";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../utils/Constanst";

export const register = (name,email,password)=>{
    const request  = axios.post(`${BASE_URL}/user/register`, {name, email, password })

    return (dispatch)=> new Promise((resolve,reject)=>{
        dispatch({type:USER_REGISTER_REQUEST})
        request.then((result) => {
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: result.data,
            })
            resolve(result.data)
        }).catch((err) => {
                dispatch({
                    type: USER_REGISTER_FAIL,
                    payload: err.response.data.message,
                })
                reject(err.response.data.message)
        });
    })
    
}