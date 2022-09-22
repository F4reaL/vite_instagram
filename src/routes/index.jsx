import Login from "../login/login";
import Navbar from "../components/Navbar";

//Public Route
const publicRoutes =[
    {path:'/', component: Navbar},
    {path:'/login', component: Login}
]
//Private Route
const privateRoutes =[]

export {publicRoutes, privateRoutes}
