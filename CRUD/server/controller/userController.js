import userModel from "../model/model.js";

export const insertData=async(req,res)=>{
try{

const {name,mobile,email,password}=req.body

const hashing= await br


const inserting=await userModel.create({name,mobile,email})

res.status(201).json({msg:"data inserted",inserting})

alert("data inserted")

console.log("data inserted")


}
catch(error){

    console.log("error ",error);
    
    res.status(500).json({error})
}


      

}
export const getData=async(req,res)=>{
 try{
    const getdata=await userModel.find()
    res.status(201).json({getdata})
 }



catch(error){

    console.log("error ",error);
    
    res.status(500).json({error})
}
}