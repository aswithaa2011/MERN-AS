import { useState } from "react"
import Timercontext from "./Timecontext"



const TimeProvider = ({children}) => {

    const [count,setCount]=useState(0)

    const handleclick=()=>{

        setCount(count+1)
    }



  return (
  <>
<Timercontext.Provider value={{count,handleclick}}>
{children}

</Timercontext.Provider>

  </>
  )
}

export default TimeProvider
