import { call, put, takeEvery } from "redux-saga/effects";
import { apiGetDetail, apiLogin } from "./api";
import { USER_DETAIL_ACTION, USER_LOGIN_ACTION, USER_LOGIN_SUCCESS_ACTION, USER_UPDATE_ACTION } from "../type";
import { Helper } from "../../utils/helpers";
import { Key } from "../../utils/common";

function* login(action) {
    const { params, callback } = action.payload;
    try {
        const res = yield call(apiLogin, params)
        if (res.status === 200) {
            // set data in local
            console.log(res.data)
            Helper.setDataStorage(Key.dataToken, res.data)
            // put token into state
            yield put({ type: USER_LOGIN_SUCCESS_ACTION, payload: res.data })
            callback(true, res.data)
        }
        else {
            callback(false, res.data)
        }
    } catch (error) {

    }
}

function* getUserDetail(action) {
    const { params, callback } = action.payload;
    try {
        const res = yield call(apiGetDetail, params)
        if (res.status === 200) {
            //update user state
            yield put({ type: USER_UPDATE_ACTION, payload: res.data })
            console.log("DETAIL", res)
            callback(true, res.data)
        }
    } catch (error) {
        callback(false, null)
    }
}

export function* userSaga() {
    yield takeEvery(USER_LOGIN_ACTION, login);
    yield takeEvery(USER_DETAIL_ACTION, getUserDetail);
}