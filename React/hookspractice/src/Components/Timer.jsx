import { useContext } from 'react'
import Timercontext from './Timecontext'

const Timer = () => {

    const {count,handleclick}=useContext(Timercontext)
  return (
<>
<p>{count}</p>
<button onClick={handleclick} > count</button>

</>
  )
}

export default Timer
