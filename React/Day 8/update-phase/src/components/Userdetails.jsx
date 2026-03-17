import { useState } from "react"

const Userdetails = () => {


    const [data,setData]=useState({name:"Aswitha",age:23})

const handleChange=()=>{
setData((prev)=>({...prev,age:24}))

}


    

  return (
   <>

   <button onClick={handleChange} className='bg-black   text-white  w-30 rounded p-4 m-6'> click here</button>

   <h1>{data.name}</h1>
   <h1>{data.age}</h1>
   
   </>
  )
}

export default Userdetails
