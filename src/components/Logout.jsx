import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./auth/auth";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api

  const {handleAuth} = useContext(AuthContext)

  const navigate = useNavigate


  handleAuth(false);

  navigate("/")

  return <div></div>;
};
