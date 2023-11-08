import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Header = () => {

  const {user, } = useContext(AuthContext);

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
        to="/login"
        className={({ isActive,}) => isActive ? "font-bold text-orange-400 underline" : "" }
        >
        Login
      </NavLink></li>

    </>

    return (
        <section className="mb-10">
        <div className="navbar bg-violet-900 px-6 py-5 rounded-t-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu font-bold text-red-600 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navMenus}
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-white text-xl">OFF. SERVICE</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-bold text-red-600  menu-horizontal px-1">
            {navMenus}
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
           
          </ul>
        </div>
        <div className="navbar-end">
        <span className="font-bold">{user && user.displayName}</span>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-8">
         <div className="w-10 rounded-full">
          
             { user && <img src={user.photoURL} alt="" />}
          
        </div>
      </label>

          <button  className="btn btn-secondary btn-sm ">Login</button>
        </div>
      </div> 
        </section>
    );
};

export default Header;
