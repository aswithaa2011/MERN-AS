 import mongoose from "mongoose"

 const userSchema=new mongoose.Schema({

    studentid:{
        type:String,
        required:true,
        trim:true
    },
     studentname:{
        type:String,
        required:true,
        trim:true
    },

  studentnumber:{
        type:Number,
        required:true,
        trim:true
    }


    },{timestamps:true}
 )

 const userModel= mongoose.model("studentTable",userSchema)

 export default userModel

