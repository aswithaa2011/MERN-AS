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




export const getDataByParams = async(req,res)=>{


try{

    
    const {studentid}=req.params

    const getData=await userModel.findById(studentid)


    res.status(200).json({getData})

        console.log(getData)

}
catch(e){

    res.status(500).json({error:"something error"})
}


    


    

   
}


   

   







