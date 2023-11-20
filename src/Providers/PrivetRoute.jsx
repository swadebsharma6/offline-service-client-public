import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        <div className="text-center"><span className="loading loading-ring text-primary loading-lg"></span></div>
    }

    if(user){
        return children;
    }


     return <Navigate state={location.pathname} to='/login'  replace></Navigate>;
};

export default PrivetRoute;