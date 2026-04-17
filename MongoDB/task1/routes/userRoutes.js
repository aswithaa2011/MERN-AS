import express from "express"
import { getData, createData } from "../controller/userController.js"

const route=express.Router()


route.post("/users",createData)
route.get("/getusers",getData)


export default route


// http://localhost:5000/api/create/users