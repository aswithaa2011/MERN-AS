import React from 'react'
import Timer from './Components/Timer'
import TimeProvider from './Components/TimeProvider'

const App = () => {
  return (
    <TimeProvider>
      <Timer/>
    </TimeProvider>
  )
}

export default App
