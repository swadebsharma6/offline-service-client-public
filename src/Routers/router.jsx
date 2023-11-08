import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import About from "../Pages/About/About";
import AddServices from "../Pages/AddServices/AddServices";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LogIn/Login";
import MySchedule from "../Pages/My-Schedule/MySchedule";
import MyServices from "../Pages/MyServices/MyServices";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/my-services',
            element: <MyServices></MyServices>
        },
        {
            path: '/add',
            element: <AddServices></AddServices>
        },
        {
            path: '/schedule',
            element: <MySchedule></MySchedule>
        }
      ]
    },
  ]);


  export default router;