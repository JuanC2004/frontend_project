import { Flexbox } from "../pages/Flexbox/Flexbox";
import { Contact } from "../pages/Contact/Contact";
import { Products } from "../pages/Products/Products";
import { Home } from "../pages/Home/Home";
import {Privacy} from "../pages/Privacy/Privacy";
import { Login } from "../pages/Login/Login"; 
import { Register } from "../pages/Register/Register";
import { Verify } from "../pages/Verify/Verify";
import { NoVerify } from "../pages/NoVerify/NoVerify";
import { User } from "../pages/User/User";
import { Dashboard } from "../pages/Admin/Dashboard/Dashboard";
import { Users } from "../pages/Admin/Users/Users";
import {Pqrsf} from "../pages/Pqrsf/Pqrsf"


 
export const GeneralRoutes = [
    {path: "/", component: Home},
    {path: "/flexbox", component: Flexbox},
    {path: "/contact", component: Contact},
    {path: "/products", component: Products},
    {path: "/privacy", component: Privacy},
    {path: "/login", component: Login},
    {path: "/register", component: Register},
    {path: "/verify", component: Verify},
    {path: "/noverify", component: NoVerify},
    {path: "/user", component: User},
    {path: "/Pqrsf", component: Pqrsf},
];

export const AdminRoutes = [
    {
        path: "/admin",
        component: Dashboard,
    },
    {
        path: "/admin/users",
        component: Users,
    }
]

/*
const allRoutes = [...GeneralRoutes];
export default allRoutes; */
