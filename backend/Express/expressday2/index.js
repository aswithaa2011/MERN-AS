import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

import createUsers from './Routes/authRoute.js'

dotenv.config()


const app=express()

app.use(cors())

app.use(express.json())


const port=process.env.PORT || 3000


app.use("/api/users",createUsers)


app.listen(port,()=>{

    console.log(`server connected  http://localhost:${port}`);
    
})

// http://localhost:5000/api/users