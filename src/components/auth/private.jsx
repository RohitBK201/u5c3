import { Children, useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "./auth"

export const Privaterct = ({Children}) =>{

    const {isAuth} = useContext(AuthContext)

    if(!isAuth)
    {
        return <Navigate to="/login"/>
    }

    return {Children}

}