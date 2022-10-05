import Login from "../login/login";
import Navbar from "../components/Navbar";
import FormikTest from "../FormikTest";

//Public Route
const publicRoutes =[
    {path:'/', component: Navbar},
    {path:'/login', component: Login},
    {path:'/formik',component: FormikTest},
]
//Private Route
const privateRoutes =[]

export {publicRoutes, privateRoutes}
