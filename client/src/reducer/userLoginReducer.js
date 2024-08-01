import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT,USER_LOGIN_REQUEST } from "../utils/Constanst";


const initialState = {
    loading: false,
    userInfo: null,
    error: null
};
export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { ...state, loading: true };
        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { ...state, loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};