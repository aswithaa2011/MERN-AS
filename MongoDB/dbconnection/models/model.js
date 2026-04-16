import mongoose from "mongoose";


const userschema=new mongoose.Schema(
    {

        userid:{
    type:String,
    required:true

        },

        username:{
            type:String,
            required:true

        }


    },{timestamps:true})


    const userModel=mongoose.model("UserINFO",userschema)


    export default userModel