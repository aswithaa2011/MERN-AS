import dotenv from 'dotenv'
import http from 'http'

dotenv.config()

const Port=process.env.PORT || 5000


const app=http.createServer()

// 

app.listen(Port,()=>{

    console.log(`server connected http://localhost:${Port}`);
    
})