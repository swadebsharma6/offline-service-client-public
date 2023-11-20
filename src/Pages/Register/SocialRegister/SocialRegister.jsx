

import { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";



const SocialRegister = () => {
   const {   googleLogin} = useContext(AuthContext);
 

  const handleGoogle =()=>{
    googleLogin()
    .then(result =>{
      const user = result.user;
   
      Navigate('/')
      toast.success('Login Successfully!')
      console.log('google user', user)
    })
    .catch(error =>{
      console.log(error.message)
      
    })
  }
 

    return (
        <div className="text-center">
        <button onClick={handleGoogle}  className="btn btn-primary">
        <FcGoogle className="text-xl"></FcGoogle>
        Google Sign
      </button> 
        </div>
    );
};

export default SocialRegister;

