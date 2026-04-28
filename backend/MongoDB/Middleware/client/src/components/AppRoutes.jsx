import { Routes,Route } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import DashBoard from "../pages/DashBoard"

const AppRoutes = () => {
  return (
    <>

    <Routes>

        <Route path="/" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                        <Route path="/dashboard" element={<DashBoard/>} />


    </Routes>
    </>
  )
}

export default AppRoutes
