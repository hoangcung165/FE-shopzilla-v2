

const setDataStorage = (key, data) => {
    try {
        localStorage.setItem(key, data === '' ? data : JSON.stringify(data))
    } catch (error) {
        console.log('error', error)
        return null;
    }
}
const getDataStorage = (key) => {
    try {
        let res = localStorage.getItem(key)
        console.log(res)
        if (res && res != '') {
            res = JSON.parse(res)
            return res
        } else {
            return null;
        }
    } catch (e) {
        console.log('error', e)
        return null;
    }
}

export const Helper = {
    setDataStorage,
    getDataStorage
}