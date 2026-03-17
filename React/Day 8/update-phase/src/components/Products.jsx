import { useState } from "react"

const Products = () => {

    const [data,setData]=useState("")
    const [saveData,setSaveData]=useState("")

    const handleClick=(e)=>{

   setData(e.target.value)
    }

const handleChange=()=>{

    setSaveData(data)

}


  return (
   <>


<input type="text"  onChange={handleClick}  className="border "/>


     <button onClick={handleChange} className='bg-black   text-white  w-30 rounded p-4 m-6'> click here</button>

     <h1>{saveData}</h1>
   </>
  )
}

export default Products
