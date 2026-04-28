import loginModel from "../model/loginModel.js";
import bcrypt from "bcrypt";

export const createRegister = async (req, res) => {

      const { userName, userEmail, userPassword } = req.body;

  try {

   const passwordHash = await bcrypt.hash(userPassword, 10);
   const registerData = await loginModel.create({userName,userEmail,userPassword: passwordHash,});
   res.status(201).json({ msg: "data inserted", registerData });

  } 
  
  catch (err) {
    res.status(500).json({ msg: "something error" });
  }
};




export const createLogin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body; 


    res.status(200).json({ msg: "login sucessfull",userEmail});


    } 
  
  catch (err) {
    res.status(500).json({ msg: "something error" });
  }
};




export const getUserById=async(req,res)=>{

  try{
        const {id}=req.params
        res.status(200).json({msg:"id Found"})
  }
  catch(err){
    res.status(500).json({msg:"something error"})
  }


}


export const getAllUser=async(req,res)=>{


  try{

    
    const fetchData=await loginModel.find()

    res.status(200).json({Datas:fetchData})

  }catch(err){

    res.status(500).json({msg:"something error"})
  }
}