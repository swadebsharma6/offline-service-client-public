import { NavLink } from "react-router-dom";


const DashNav = () => {

    const navMenus =<>
    <li><NavLink
    to="/dashboard/add-services"
    className={({ isActive,}) => isActive ? "text-lg font-bold text-blue-600 " : "" }
    >
    Add-Service
  </NavLink></li>
    <li className="text-center"><NavLink
    to="/dashboard/my-service"
    className={({ isActive,}) => isActive ? "text-lg font-bold text-blue-600 " : "" }
    >
    My-Service
  </NavLink></li>
    <li><NavLink
    to="/dashboard/my-schedule"
    className={({ isActive,}) => isActive ? "text-lg font-bold text-blue-600 " : "" }
    >
    My-Schedule
  </NavLink></li>
    
    </>

    return (
        <div>
        <div className="navbar-center lg:flex">
        <ul className="menu font-bold text-white p-4 menu-vertical px-1 w-full">
          {navMenus}
         
        </ul>
      </div>
        </div>
    );
};

export default DashNav;