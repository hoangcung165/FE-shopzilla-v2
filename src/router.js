import DashBoard from "./screens/DashBoard";
import Login from "./screens/Login";
import ProductCategory from "./screens/Product/Category";
import StaffManager from "./screens/StaffManager";
import Store from "./screens/Store";
import UserProfile from "./screens/UserProfile";

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
    },
    {
        name: "User Profile",
        key: "UserProfile",
        router: "/user/my_profile",
        component: <UserProfile />,
        useCommonLayout: true
    },
    {
        name: "Staff Manager",
        key: "StaffManager",
        router: "/staff_manager",
        component: <StaffManager />,
        useCommonLayout: true
    },
    {
        name: "Store Manager",
        key: "StoreManager",
        router: "/store_manager",
        component: <Store />,
        useCommonLayout: true
    },
    {
        name: "Product",
        key: "Product",
        router: "/product/category",
        component: <ProductCategory />,
        useCommonLayout: true
    }

]

export default routers