import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Providers/AuthProvider";


const Header = () => {

  const {user,  logoutUser } = useContext(AuthContext);

  const handleLogOut = ()=>{
    logoutUser()
    .then(()=>{
      console.log('User logOut')
        swal( "User LogOut successfully!", "success");
    })
    .catch((error) => {
        console.log(error.message)
      })
}

    const navMenus = <>
        <li><NavLink
        to="/"
        className={({ isActive,}) => isActive ? "font-bold text-orange-400 underline" : "" }
        >
        Home
      </NavLink></li>
        <li><NavLink
        to="/services"
        className={({ isActive,}) => isActive ? "font-bold text-orange-400 underline" : "" }
        >
        Services
      </NavLink></li>
        <li><NavLink
        to="/about"
        className={({ isActive,}) => isActive ? "font-bold text-orange-400 underline" : "" }
        >
        About
      </NavLink></li>

           {
            user &&
            <li tabIndex={0}>
              <details>
                <summary>DashBoard</summary>
                <ul className="p-2">
                  <li><NavLink
                  to="/my-services"
                  className={({ isActive,}) => isActive ? "font-bold text-orange-400" : "" }
                  >
                 My Services
                </NavLink></li>
                  <li><NavLink
                  to="/add"
                  className={({ isActive,}) => isActive ? "font-bold text-orange-400 " : "" }
                  >
                 Add Services
                </NavLink></li>
                  <li><NavLink
                  to="/schedule"
                  className={({ isActive,}) => isActive ? "font-bold text-orange-400" : "" }
                  >
                 My Schedules
                </NavLink></li>
                  
                </ul>
              </details>
            </li>
           }

    </>

    return (
        <section className="mb-4 bg-violet-900">
        <div className="navbar  px-6 py-5 rounded-t-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu font-bold text-red-600 menu-sm dropdown-content mt-3 z-[1] p-6 shadow bg-base-100 rounded-box w-52">
              {navMenus}
             
              
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-primary text-xl uppercase">OFF. Recipe Book</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-bold text-red-600  p-4 menu-horizontal px-1">
            {navMenus}
           
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-8">
         <div className="w-10 rounded-full">
          
             { user && <img src={user.photoURL} alt="" />}
          
        </div>
      </label>
        {
          user
           ? <button onClick={handleLogOut}  className="btn btn-secondary btn-sm ">LogOut</button>
          : 
          <Link to='/login'> <button  className="btn btn-secondary btn-sm ">Login</button></Link>
        }
          
        </div>
      </div> 
        </section>
    );
};

export default Header;


