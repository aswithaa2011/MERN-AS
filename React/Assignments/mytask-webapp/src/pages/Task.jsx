import React from 'react'
import { useNavigate } from 'react-router-dom'

const Task = () => {

    const navigate = useNavigate()

 const Day10Task1 = ()=>{

    navigate("/day10task1")

 }

 const Day10Task2=()=>{
    navigate("/day10task2")
 }

  return (
    <>

    <div className=' flex flex-col '>


    <div className='bg-blue-400 m-10 text-black p-10'>
      <div className='flex gap-10'>
         <button onClick={Day10Task1} className='bg-black text-white p-1 rounded-2xl w-30'>Day 10-1</button>
          <button onClick={Day10Task2} className='bg-black text-white p-1 rounded-2xl w-30'>Day 10 - 2</button>
         </div>




</div>



<div  className='bg-blue-400 m-10 text-black p-10'>

    <div className='flex gap-10'>
<button onClick={Day10Task1} className='bg-black text-white p-1 rounded-2xl w-30'>Day 10-1</button>
          <button onClick={Day10Task2} className='bg-black text-white p-1 rounded-2xl w-30'>Day 10 - 2</button>
    </div>
</div>

    </div>






    </>
  )
}

export default Task
