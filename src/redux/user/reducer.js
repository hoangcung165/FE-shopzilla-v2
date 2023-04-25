import { USER_DETAIL_ACTION, USER_LOGIN_SUCCESS_ACTION, USER_UPDATE_ACTION } from "../type";

const init = {
    data: null,
    token: null
}

const userReducer = (state = init, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS_ACTION:
            return {
                ...state,
                token: action.payload
            }
        case USER_UPDATE_ACTION:
            // update user state
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default userReducer