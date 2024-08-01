import {
    GET_ALL_NOTE_FAIL,
    GET_ALL_NOTE_REQUEST,
    GET_ALL_NOTE_SUCCESS,
    NOTEBOOKS_CREATE_FAIL,
    NOTEBOOKS_CREATE_REQUEST,
    NOTEBOOKS_CREATE_SUCCESS,
    NOTEBOOKS_DELETE_FAIL,
    NOTEBOOKS_DELETE_REQUEST,
    NOTEBOOKS_DELETE_SUCCESS,
    NOTEBOOKS_UPDATE_FAIL,
    NOTEBOOKS_UPDATE_REQUEST,
    NOTEBOOKS_UPDATE_SUCCESS
} from "../utils/Constanst"

const initialState = {
    data:[],
    loading: false,
    error: null
}

export const newNotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTEBOOKS_CREATE_REQUEST:
            return { ...state, loading: true }
        case NOTEBOOKS_CREATE_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case NOTEBOOKS_CREATE_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;  // Added this line
    }
}

export const getAllnotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_NOTE_REQUEST:
            return { ...state, loading: true }
        case GET_ALL_NOTE_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case GET_ALL_NOTE_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export const updateNotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTEBOOKS_UPDATE_REQUEST:
            return { ...state, loading: true }
        case NOTEBOOKS_UPDATE_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case NOTEBOOKS_UPDATE_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;  // Added this line
    }
}

export const deleteNotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTEBOOKS_DELETE_REQUEST:
            return { ...state, loading: true }
        case NOTEBOOKS_DELETE_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case NOTEBOOKS_DELETE_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;  // Added this line
    }
}