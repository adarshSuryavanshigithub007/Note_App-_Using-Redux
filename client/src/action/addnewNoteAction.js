import axios from "axios"
import { BASE_URL } from "../config/API_BASE_URL"
import { GET_ALL_NOTE_FAIL, GET_ALL_NOTE_REQUEST, GET_ALL_NOTE_SUCCESS, NOTEBOOKS_CREATE_FAIL, NOTEBOOKS_CREATE_REQUEST, NOTEBOOKS_CREATE_SUCCESS, NOTEBOOKS_DELETE_FAIL, NOTEBOOKS_DELETE_REQUEST, NOTEBOOKS_DELETE_SUCCESS } from "../utils/Constanst"


const token = localStorage.getItem('token')
export const createNewNote = ({ content, category, title }) => {
    const request = axios.post(`${BASE_URL}/note/addnewnotes`, { title, category, content }, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    return (dispatch) => new Promise((resolve, reject) => {
        dispatch({
            type: NOTEBOOKS_CREATE_REQUEST,
        })
        request.then((response) => {
            dispatch({
                type: NOTEBOOKS_CREATE_SUCCESS,
                payload: response.data
            })
            resolve(response.data)
        }).catch((err) => {
            dispatch({
                type: NOTEBOOKS_CREATE_FAIL,
                payload: err.response.data
            })
            reject(err)
        })
    })
}

export const getAllnotes = ()=>{
    const request = axios.get( `${BASE_URL}/note/getallnotes`,{
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    return(dispatch)=> new Promise((resolve,reject)=>{
        dispatch({
            type: GET_ALL_NOTE_REQUEST,
        })
        request.then((response)=>{
            dispatch({
                type: GET_ALL_NOTE_SUCCESS,
                payload: response.data
            })
            console.log(response.data.data)
            resolve(response.data.data)
        }).catch((err)=>{
            dispatch({
                type: GET_ALL_NOTE_FAIL,
                payload: err.message
            })
            reject(err)
        })
    })
}

export const deletenotes = (id)=>{
    console.log(id)
    const request = axios.delete(`${BASE_URL}/note/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    return (dispatch)=> new Promise((resolve,reject)=>{
        dispatch({
            type: NOTEBOOKS_DELETE_REQUEST,
            })
        request.then((response)=>{
            dispatch({
                typeof:NOTEBOOKS_DELETE_SUCCESS,
                payload:response.data
            })
            resolve(response.data)
            console.log(response.data)
        }).catch((err)=>{
            dispatch({
                type: NOTEBOOKS_DELETE_FAIL,
                payload: err.message
            })
        })
        
    })
}