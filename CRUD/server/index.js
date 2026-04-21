import express from "express";

import dotenv from "dotenv"
import cors from "cors"

import insertRoutes from "./routes/userRoutes.js"
import connnectdb from "./config/db.js";

dotenv.config()


const app=express()

app.use(cors())
app.use(express.json())

connnectdb()

app.use("/api/create",insertRoutes)


const port=process.env.PORT || 3000


app.listen(port,()=>{

    console.log(`server connect http://localhost:${port}`);
    
})

// http://localhost:5000/api/create