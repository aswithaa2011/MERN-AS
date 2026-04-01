import React, { useMemo, useState } from 'react'

const Calculationusememo = () => {
  const [number,setNumber]=useState(0)



const handlechnage=(e)=>{


    setNumber(e.target.value) 
}


const sumOfNumbers=useMemo(()=>{

    let sum=0
    for(let i=1;i<=number;i++){

        sum+=i;
    }
    return sum
},[number])


    

  return (
    <div>

        <p>
Sum of Number : {sumOfNumbers}        </p>
      

    <input className="bg-black text-white p-1 w-50 m-10" type="text" onChange={handlechnage} />
    </div>
  )
}





export default Calculationusememo
