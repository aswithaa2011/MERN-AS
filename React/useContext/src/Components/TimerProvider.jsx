import React, { useState } from 'react'
import TimerContext from './TimerContext'

const TimerProvider = ({children}) => {

    const [time,setTime]=useState(0)

    const changeTime=()=>{

        setTime(time+1)

        
    }
  return (
    <div>
      

      <TimerContext.Provider value={{time,changeTime}}>
        {children}


      </TimerContext.Provider>
    </div>
  )
}

export default TimerProvider

