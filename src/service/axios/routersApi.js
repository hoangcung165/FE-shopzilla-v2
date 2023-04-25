import { SYSTEM_CONFIG } from '../../utils/common/index'

const prefixApi = `/api/${SYSTEM_CONFIG.apiVersion}`

const routerApi = {
    user: {
        login: `/auth/login`,
        getDetail: `${prefixApi}/user/detail`
    }
}

export default routerApi