import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./auth/auth";

export const Login = () => {
  //  use reqres to log user in.

  const {handleAuth,isAuth} = useContext(AuthContext)
  const navigate = useNavigate();

  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      {/* <input type="submit" value="SIGN IN" className="login_submit" onSubmit={()=>{

        

          handleAuth(true);

          console.log(isAuth)

          navigate("/",{replace : true})


      }}/> */}

      <button className="login_submit" onClick={()=>{ 
        
        handleAuth(true)
        navigate("/",{replace : true})

      }}>SIGN IN</button>
    </form>
  );
};
