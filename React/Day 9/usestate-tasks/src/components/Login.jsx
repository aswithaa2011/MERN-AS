import { useState } from "react"

const Login = () => {

    const [isloggedin,setIsloggedin]=useState(false)

  const handleClick=()=>{

    setIsloggedin(!isloggedin)
  }


  return (

    <>
  

  <button onClick={handleClick} 
  
  className="bg-black  w-40 m-10 rounded-2xl  text-white p-2">Login 
  
  </button>

  <p className="text-xl ml-10 ">    {isloggedin && <p>Welcome user</p>}</p>
</>
  )
}

export default Login


export const UpdateName=()=>{

    const [name,setName]=useState("Aswitha")


    const handleClick=()=>{

        setName("Pooja")
    }

return(
    <>
<button onClick={handleClick} 
  
  className="bg-black  w-40 m-10 rounded-2xl  text-white p-2">click here
  
  </button>

  <h1>{name}</h1>
    
    </>
)




}