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
import PrivetRoute from "../Providers/PrivetRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";


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
            loader: ()=> fetch('https://offline-service-server-side.vercel.app/all-services')
        },
        {
            path: '/details/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params})=> fetch(`https://offline-service-server-side.vercel.app/service/${params.id}`)
        },
        {
            path: '/purchase/:id',
            element:<PrivetRoute><Purchase></Purchase></PrivetRoute>,
            loader: ({params})=> fetch(`https://offline-service-server-side.vercel.app/service/${params.id}`)
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
     
      ],
      errorElement: <ErrorPage></ErrorPage>
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
            element: <PrivetRoute><AddServices></AddServices></PrivetRoute>
        },
        {
            path:'/dashboard/my-service',
            element: <PrivetRoute><MyServices></MyServices></PrivetRoute>
        },
        {
            path: '/dashboard/update/:id',
            element: <PrivetRoute><Update></Update></PrivetRoute>,
            loader: ({params})=> fetch(`https://offline-service-server-side.vercel.app/news-services/${params.id}`)
        },
        
        {
            path: '/dashboard/my-schedule',
            element: <PrivetRoute><MySchedule></MySchedule></PrivetRoute>
        }
      ],
      errorElement: <ErrorPage></ErrorPage>
    }
  ]);


  export default router;