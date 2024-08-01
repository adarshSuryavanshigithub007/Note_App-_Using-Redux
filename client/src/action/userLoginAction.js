import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../utils/Constanst.js"
import { BASE_URL } from "../config/API_BASE_URL.js"



export const login = (email, password) => {
    const request = axios.post(`${BASE_URL}/user/login`, { email, password }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return (dispatch) => new Promise((resolve, reject) => {
        dispatch({ type: USER_LOGIN_REQUEST })
        request.then((response) => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: response.data
            })
            resolve(response.data)
        }).catch((err) => {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: err.response.data.message
            })
            reject(err)
        })
    })
}

export const logOut = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                dispatch({
                    type: USER_LOGOUT,
                    payload: null
                })
                localStorage.removeItem('token');
                window.location.href = '/login'
                resolve()
            } catch (error) {
                reject(error)
            }

        })
    }
}
