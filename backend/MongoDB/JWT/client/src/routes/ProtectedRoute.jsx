import { Navigate } from "react-router-dom"



const ProtectedRoute = ({children}) => {

        const checktoken=localStorage.getItem("jwToken")

        if(!checktoken){
            alert("invalid user please login again")
            return <Navigate to={"/"}/>
        }

  return children
}

export default ProtectedRoute
