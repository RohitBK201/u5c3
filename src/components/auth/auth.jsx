import { createContext,useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{

    const [isAuth,SetAuth] = useState(false)

    const handleAuth=(set)=>{

        SetAuth(set);

    }

    return(<AuthContext.Provider value={{isAuth,handleAuth}}>{children}</AuthContext.Provider>);

}