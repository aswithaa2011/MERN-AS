import express from 'express'
import { insertData ,getData } from '../controller/userController.js';


const route = express.Router()

route.post("/insert",insertData)
route.get("/getdata",getData)

export default route;

// http://localhost:5000/api/create/insert

//http://localhost:5000/api/create/getdata"