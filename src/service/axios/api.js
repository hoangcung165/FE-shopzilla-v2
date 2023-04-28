import axios from "axios";
import { BASE_URL, Key } from '../../utils/common/index';
import { Helper } from "../../utils/helpers";

const Api = axios.create({
    baseURL: BASE_URL
})

Api.interceptors.request.use(
    (request) => {
        let token = Helper.getDataStorage(Key.dataToken);
        if (token) {
            request.headers.Authorization = `Bearer ${token?.accessToken}`;
        }

        return request;
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default Api;