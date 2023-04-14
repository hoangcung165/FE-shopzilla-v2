import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from './locale/en.json'
import vi from './locale/vi.json'

const resources = {
    en: {
        translation: en
    },
    vi: {
        translation: vi
    }
}

// const resources = {
//     en: {
//         translation: {
//             "Hello": "Hello",
//             "Welcome to React": "Welcome to React"
//         }
//     },
//     vi: {
//         translation: {
//             "Hello": "Xin chào",
//             "Welcome to React": "Chào mừng đến với React"
//         }
//     }
// };

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
    interpolation: {
        escapeValue: false
    }
});


export default i18n;