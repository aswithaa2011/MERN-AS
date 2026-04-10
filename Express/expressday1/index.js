import express from 'express'

import dotenv from 'dotenv'

import cors from 'cors'

dotenv.config()



const app=express()

app.use(cors())

app.use(express.json())


// console.log(app);


const port=process.env.PORT || 3000

app.listen(port,()=>{


    console.log(` express running on http://localhost:${port}`);
    
})