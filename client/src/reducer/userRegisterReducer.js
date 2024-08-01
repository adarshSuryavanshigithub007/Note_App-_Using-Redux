import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../utils/Constanst";

const initialState = {
    loading: false,
    userInfo: null,
    error: null
};

export const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { ...state, loading: true, }
        case USER_REGISTER_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload }
        case USER_REGISTER_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state; 
    }
}

