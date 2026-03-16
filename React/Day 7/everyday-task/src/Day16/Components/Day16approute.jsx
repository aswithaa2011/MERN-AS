import { Routes,Route } from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"


const Day16approute = () => {
  return (
   <>

   <Routes>
   <Route path="/login" element={<Login/>}></Route>
<Route path="/dashboard" element={<Dashboard/>}></Route>

</Routes>
   </> 
  )
}

export default Day16approute
