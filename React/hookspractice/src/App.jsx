import React, {  useMemo, useState } from 'react'
// import Timer from './Components/Timer'
// import TimeProvider from './Components/TimeProvider'
// import ApiFetch from './ApiFunctions/ApiFetch'



const App = () => {


const [theme ,setTheme]=useState(false)

const [number,setNumber]=useState(0)


const handleClick=()=>{

  setTheme(!theme)
}
 


const handleChange=(e)=>{
  setNumber(Number(e.target.value))


}




// const sumofNumbers=ExpensiveFunction(number);

const sumofNumbers=useMemo(()=>{

let sum=0

for(let i=1;i<=number;i++){

  sum+=i
}                           
return sum

},[number])


console.log(sumofNumbers)


  return (
    // <TimeProvider>
    //   <Timer/>
    // </TimeProvider>



    <>
     
     <div className={theme?"bg-red-500  p-5":"bg-blue-950 p-5"}>
    <button onClick={handleClick} className='bg-black rounded-xl p-2 text-white'>Change Theme</button>

    </div>


    <div>
      <input 
      onChange={handleChange}
      type="text" className='border p-2 m-5' placeholder='Enter the number'/>

      <p>{sumofNumbers}</p>
    </div>

    </>
  )
}


export default App
