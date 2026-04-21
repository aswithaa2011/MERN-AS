import express from "express"
import { getDataByParams, createData } from "../controller/userController.js"

const route=express.Router()


route.post("/users",createData)

route.get("/getdata/:studentid",getDataByParams)



export default route



//http://localhost:5000/api/create/users

//http://localhost:5000/api/create/getdata/