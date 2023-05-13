import { call, takeEvery } from "redux-saga/effects"
import { apiCreateStore, apiGetListStores } from "./api"
import { CREATE_STORE_ACTION, LIST_STORE_ACTION } from "../type"

function* getListStores(action) {
    const { params, callback } = action.payload
    try {
        const res = yield call(apiGetListStores, params)
        if (res.status === 200) {
            callback(true, res.data)
        }
    } catch (error) {
        callback(false, null)
    }
}

function* createStore(action) {
    const { params, callback } = action.payload

    try {
        const res = yield call(apiCreateStore, params)
        if (res.status === 200) {
            callback(true, res.data)
        }
    } catch (error) {
        callback(false, null)
    }
}

export function* storeSaga() {
    yield takeEvery(LIST_STORE_ACTION, getListStores)
    yield takeEvery(CREATE_STORE_ACTION, createStore)
}