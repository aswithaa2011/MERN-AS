import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount]=useState(0)

    const handleclick=()=>{
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)

            }
  return (
  <>

  <button  onClick={handleclick} className='bg-black   text-white w-30 rounded p-4 m-6'>Increment</button>

<h1>{count}</h1>

  </>
  )
}

export default Counter
