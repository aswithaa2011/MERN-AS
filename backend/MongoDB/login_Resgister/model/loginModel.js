import mongoose from "mongoose";



const loginSchema=new mongoose.Schema({

    userName:String,
    userPassword:String,
    userEmail:String

},{timestamps:true})


const loginModel= mongoose.model("RegisterTable",loginSchema)


export default loginModel;