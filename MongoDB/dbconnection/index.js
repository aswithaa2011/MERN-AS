import express from "express";
import dotenv from "dotenv"
import connectdb from "./config/db.js";
import UserRoute from "./routes/UserRoute.js"

dotenv.config()


const app=express()

app.use(express.json());

const port=process.env.PORT || 3000


connectdb()


app.use("/api/create",UserRoute)
app.listen(port,()=>{


    console.log(`server connected http://localhost:${port}`);


    
})


//http://localhost:5000/api/create