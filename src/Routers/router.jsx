import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../LayOut/DashBoard";
import Root from "../LayOut/Root";
import About from "../Pages/About/About";
import AddServices from "../Pages/AddServices/AddServices";
import DashBoardHome from "../Pages/DashBoard/DashBoardHome/DashBoardHome";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/Home/PopularService/ServiceDetails";
import Login from "../Pages/LogIn/Login";
import MySchedule from "../Pages/My-Schedule/MySchedule";
import MyServices from "../Pages/MyServices/MyServices";
import Update from "../Pages/MyServices/Tools/UpdateService/Update";
import Purchase from "../Pages/Purchase/Purchase";
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
            element: <Services></Services>,
            loader: ()=> fetch('http://localhost:5000/all-services')
        },
        {
            path: '/details/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path: '/purchase/:id',
            element:<Purchase></Purchase>,
            loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
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
     
      ]
    },
    {
      path: '/dashboard',
      element:<DashBoard></DashBoard>,
      children:[
        {
            path: '/dashboard',
            element: <DashBoardHome></DashBoardHome>
        },
        {
            path: '/dashboard/add-services',
            element: <AddServices></AddServices>
        },
        {
            path:'/dashboard/my-service',
            element: <MyServices></MyServices>
        },
        {
            path: '/dashboard/update/:id',
            element: <Update></Update>,
            loader: ({params})=> fetch(`http://localhost:5000/news-services/${params.id}`)
        },
        
        {
            path: '/dashboard/my-schedule',
            element: <MySchedule></MySchedule>
        }
      ]
    }
  ]);


  export default router;