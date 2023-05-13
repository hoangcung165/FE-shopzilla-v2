import { SYSTEM_CONFIG } from '../../utils/common/index'

const prefixApi = `/api/${SYSTEM_CONFIG.apiVersion}`

const routerApi = {
    user: {
        login: `/auth/login`,
        getDetail: `${prefixApi}/user/detail`,
        getStaff: `${prefixApi}/user`
    },
    store: {
        listStore: `${prefixApi}/store`,
        createStore: `${prefixApi}/store/create`
    }
}

export default routerApi