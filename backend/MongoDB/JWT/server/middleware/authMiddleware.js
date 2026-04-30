


export const checkToken=(res,req,next)=>{

   try{

     const token=req.headers.authorization

    if(!token){
        res.status(400).json({msg:"invalid token"})
        return
    }
const checkjwt=jwt.verify(token,process.env.JWT_SECURE)

req.users=checkjwt

next()

   }
   catch(error){

    console.log("error",error);
            res.status(404).json({msg:"Your Token is broken kindly login again"})

    
   }

next()
}