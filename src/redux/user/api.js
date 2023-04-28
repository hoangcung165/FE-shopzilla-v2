import Api from "../../service/axios/api"
import routerApi from '../../service/axios/routersApi'
import { SYSTEM_CONFIG } from "../../utils/common";

const errorBadRequestHandler = (error) => {
    if (error.response?.status === 400 && error.response?.data?.code !== null) {
        return error.response;
    }
    return null
}
export const apiLogin = async (params) => {
    try {
        let res = await Api.post(routerApi.user.login, params, {
            headers: {
                Authorization: '',
            }
        })
        // SYSTEM_CONFIG.devMode ?? console.log("=== Api Register ===", res)
        return res;
    } catch (error) {
        // catch exception error
        if (error.response?.status === 400 && error.response?.data?.code !== null) {
            return error.response;
        }
    }
}
export const apiGetDetail = async () => {
    try {
        let res = await Api.get(routerApi.user.getDetail)

        return res;
    } catch (error) {
        SYSTEM_CONFIG.devMode ?? console.log("=== API GET DETAIL ===", error)
        return errorBadRequestHandler(error)
    }
}