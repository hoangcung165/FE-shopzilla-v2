import { fork } from 'redux-saga/effects'
import { userSaga } from './user/saga'
import { storeSaga } from './store/saga'

export default function* rootSaga() {
    yield fork(userSaga)
    yield fork(storeSaga)
}