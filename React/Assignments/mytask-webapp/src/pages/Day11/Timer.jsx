import React, { useEffect, useState } from 'react'

const Timer = () => {


   const [time,setTimer]=useState(0)

useEffect(()=>{

const timer=setInterval(()=>{

  setTimer((prev)=>prev+1)

},1000)


return ()=> clearInterval(timer)
},[])


  return (
    <>
  
    <div className='bg-pink-300 w-30 h-20 flex justify-center items-center m-10 rounded'>
      

      <h1>{time}</h1>
    </div>
      </>
  )
}

export default Timer