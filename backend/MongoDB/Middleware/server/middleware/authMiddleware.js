import loginModel from "../model/loginModel.js";
import bcrypt  from "bcrypt";

export const  validateUser=async(req,res,next)=>{

const {userName,userEmail,userPassword}=req.body

const checkemail=await loginModel.findOne({userEmail})

if(checkemail){
    res.status(400).json({msg:"Email id Already Exists"})
    return
}

if(userPassword.length <5){
    res.status(404).json({msg:"password required more than 6 charaters"})
    return
}

if(!userName || !userEmail || !userPassword){

    res.status(400).json({msg:"Enter the details"})
    return
}
next()

}

export const validateLogin=async(req,res,next)=>{
const {userEmail,userPassword}=req.body
const checkemail=await loginModel.findOne({userEmail})

if(!checkemail){
    res.status(400).json({msg:"not a registered email"})
    return
}


const checkPassword=await  bcrypt.compare(userPassword,checkemail.userPassword)

if(!checkPassword){
    res.status(404).json({msg:"invalid password"})
}

next()
 

}


export const ValidateById=async(req,res,next)=>{

    const {id}=req.params
    const user=await loginModel.findById(id)

    if(!user){
        res.status(400).json({msg:"user not found "})
        return
    }
   res.status(200).json({userDetails:user})


next()

}