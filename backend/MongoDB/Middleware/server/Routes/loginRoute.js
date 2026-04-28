import express from "express"
import { createRegister ,createLogin ,getUserById,getAllUser} from "../Controller/loginController.js"
import { ValidateById, validateLogin, validateUser  } from "../middleware/authMiddleware.js"


const route=express.Router()


route.post("/register",validateUser,createRegister)
route.post("/login",validateLogin, createLogin)
route.get("/getUser/:id",ValidateById, getUserById)
route.get("/getalluser",getAllUser)



export default route


// http://localhost:5000/api/create/register
// http://localhost:5000/api/create/login
// http://localhost:5000/api/create/getUser/69edaf3306041c085356aa58
// http://localhost:5000/api/create/getalluser
