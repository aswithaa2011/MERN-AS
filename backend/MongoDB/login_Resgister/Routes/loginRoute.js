import express from "express"
import { createRegister } from "../Controller/loginController.js"


const route=express.Router()


route.post("/register",createRegister)


export default route


// http://localhost:5000/api/create/register