import React, { useState } from 'react'

const Skills = () => {


    const [skills,setSkills]=useState(["js","react"])

    
    const handlechange=()=>{
        console.log(skills)

        setSkills((prev)=>([...prev ,"mern"]))
    }

  return (
  <>

  <div className='m-10'>

  

            <button onClick={handlechange} className='bg-black p-3 text-white rounded '>click</button>


{skills.map((e,i)=>(
<div key={i}>
    {e}
   
    </div>
))}



  </div>
  </>
  )
}

export default Skills
