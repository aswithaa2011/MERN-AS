


export const checkToken=(res,req,next)=>{

    const token=req.headers.authorization

    if(!token){
        res.status(400).json({msg:"invalid token"})
        return
    }


}