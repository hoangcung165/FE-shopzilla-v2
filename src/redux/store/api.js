import Api from "../../service/axios/api"
import routerApi from "../../service/axios/routersApi"
const errorBadRequestHandler = (error) => {
    if (error.response?.status === 400 && error.response?.data?.code !== null) {
        return error.response;
    }
    return null
}
export const apiGetListStores = async (params) => {
    try {
        let res = await Api.post(routerApi.store.listStore, params)

        return res
    } catch (error) {
        return errorBadRequestHandler(error)
    }
}

export const apiCreateStore = async (params) => {
    try {
        let res = await Api.post(routerApi.store.createStore, params)

        return res
    } catch (error) {
        return errorBadRequestHandler(error)
    }
}

