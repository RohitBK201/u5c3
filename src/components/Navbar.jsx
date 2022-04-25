import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth/auth";

export const Navbar = () => {

  const {isAuth} = useContext(AuthContext)

  

  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      
      {!isAuth?
      
      <Link className="nav-login" to="/login">
      Login
    </Link>
      
      : 
      
     
      <Link className="nav-logout" to="/logout">
        Logout
      </Link> 


      }

      
    </div>
  );
};
