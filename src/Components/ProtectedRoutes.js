import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
//import Login from "./pages/Login/Login"

const useAuth=()=>{
    const user = localStorage.getItem('user')
    return user
}
const ProtectedRoutes=()=>{
    const[ loggedIn, setUserLoggedIn] = useState(false)
    const isAuth = useAuth()
    
    return isAuth ?<Outlet/> :<Navigate to="/login"/>
}

export default ProtectedRoutes