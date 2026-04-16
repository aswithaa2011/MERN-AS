import express from 'express'
import { createController ,getUserByParams } from '../controller/authController.js'

const route =express.Router()


route.post("/createUsers",createController)
route.get("/getbyparams/:userid",getUserByParams)


//http://localhost:5000/api/users/createUsers


//http://localhost:5000/api/users/getbyparams/1001


export default route