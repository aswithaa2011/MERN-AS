

import express, { Router } from "express";
import { userController } from "../controller/UserController.js";


const route =express.Router()

route.post("/user",userController)


export default route;


//http://localhost:5000/api/create/user