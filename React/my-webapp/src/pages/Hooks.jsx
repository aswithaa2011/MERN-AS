import React, { useState } from 'react'

const Hooks = () => {

    const [data,setData]=useState("Hii")

    const Handleclick=()=>{
        
         setData("Welcome")

    }

    let [count,setCount]=useState(0)
 
        const CounterValue=()=>{

        
       setCount(prev=>prev+1)
        }


        const [products,setProducts]=useState({name:"Aswitha",age:23,mark:100})

         const productsData=()=>{
            setProducts({name:"Aswi",age:25,mark:50})
         }

  return (
    <>
    

    <div>

        <h1>{data}</h1>

        <button className='bg-amber-300 mt-2 rounded ' onClick={Handleclick}>click to change</button>



           <h1>{count}</h1>

        <button className='bg-amber-300 mt-2 rounded ' onClick={CounterValue}>click to change</button>


                   <h1>{products.name}</h1>
                    <h1>{products.age}</h1>
                     <h1>{products.mark}</h1>

        <button className='bg-amber-300 mt-2 rounded ' onClick={productsData}>click to change</button>

    </div>
    
    </>


  )
}

export default Hooks
