
import mongoose from "mongoose"

const connnectdb=async()=>{

    try{
        const con=await mongoose.connect(process.env.MONGO_URI)
        console.log(`db connected ${con.connection.host}`)
    }
    catch(e){

        console.log("error", e);
        process.exit(0)
        
    }
}

export default connnectdb