export const SYSTEM_CONFIG = {
    devMode: true,
    devUrl: 'http://localhost:8080',
    productionUrl: window.origin,
    apiVersion: 'v1',
    pH: 16
}

export const drawerWidth = 260



export const BASE_URL = SYSTEM_CONFIG.devMode ? SYSTEM_CONFIG.devUrl : SYSTEM_CONFIG.productionUrl

export const Key = {
    dataToken: 'token'
}
