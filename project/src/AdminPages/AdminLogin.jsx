import React, { useState } from 'react'

const AdminLogin = () => {


    const [formData,setFormData]=useState([])



    const HandleChange=(e)=>{

        setFormData(e.target.value)
    }

   const  HandleSubmit=()=>{


   }

  return (
    <>
    <form>


     <input type="text" onChange={HandleChange} />
     <input type="text" onChange={HandleChange} />
     <input type="text" onChange={HandleChange}/>

     <input type="Submit"  onClick={HandleSubmit} />

         </form>


    </>
  )
}

export default AdminLogin
