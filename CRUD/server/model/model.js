
import mongoose from "mongoose";


const userSchema=new mongoose.Schema({

name:String,
mobile:Number,
email:String,
createdby:{type:String,default:"admin"},
updateddby:{type:String,default:"admin"},



    
},{timestamps:true})


const userModel=mongoose.model("myTable",userSchema)

export default userModel