import loginModel from "../model/loginModel.js"
import bcrypt from "bcrypt"

export const createRegister=async(req,res)=>{

try{
   const {userName,userEmail,userPassword}=req.body

    const passwordHash= await bcrypt.hash(userPassword,10)

        const registerData=await loginModel.create({userName,userEmail,userPassword:passwordHash})

console.log(registerData);

    res.status(201).json({msg:"data inserted",registerData})
    
    }
catch(err){

    res.status(500).json({msg:"something error"})
}

}