import React from 'react'
import { useState } from 'react'
const Toggle = () => {


    const [status,setStatus]=useState(false)



  return (
  <>
  <div >

    <button className='bg-black p-2 w-20 text-white' onClick={()=>setStatus(!status)}  >
        {status&& "on"}</button>
    
  </div>
  
  </>
  )
}

export default Toggle
