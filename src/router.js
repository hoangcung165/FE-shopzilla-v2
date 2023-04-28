import DashBoard from "./screens/DashBoard";
import Login from "./screens/Login";

const routers = [
    {
        name: "DashBoard",
        key: "dashboard",
        router: "/dashboard",
        component: <DashBoard />,
        useCommonLayout: true
    },
    {
        name: "Login",
        key: "login",
        router: "/login",
        component: <Login />,
        useCommonLayout: false
    }
]

export default routers