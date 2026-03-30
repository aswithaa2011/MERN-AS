import React, { useContext } from 'react'
import TimerContext from './TimerContext'

const Timer = () => {

    const {time,changeTime}=useContext(TimerContext)





    
  return (
   <>
  
    <p>{time}</p>
  <button onClick={changeTime}  className='bg-black text-white rounded-2xl p-3 m-5 w-30'>
   count
  </button>
   </>
  )
}

export default Timer
