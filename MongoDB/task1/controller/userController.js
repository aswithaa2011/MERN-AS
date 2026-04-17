import userModel from "../models/userModel.js"


export const createData=async(req,res)=>{


    try{

        const {studentid,studentname,studentnumber}=req.body

        const createTable=await userModel.create({studentid,studentname,studentnumber})

        res.status(201).json({msg:"data added"})

        console.log("data inserted");
        

    
        
    }
    catch(e){
 console.log("error" ,e);

 res.status(500).json({msg:"error occured"})
 

    }



}

export const getData=async(req,res)=>{


    try{

      const fetchdata=

    
        
    }
    catch(e){
 console.log("error" ,e);

 res.status(500).json({msg:"error occured"})
 

    }



}