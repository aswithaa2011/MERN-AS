import express from "express"
import { createRegister ,createLogin} from "../Controller/loginController.js"


const route=express.Router()


route.post("/register",createRegister)
route.post("/login",createLogin)



export default route


// http://localhost:5000/api/create/register
// http://localhost:5000/api/create/login