import React, { useState } from 'react'
import axios from "axios"

const App = () => {

const [formData,setFormData]=useState({name:"",email:"",mobile:""})

const handleChange=async(e)=>{

  setFormData({...formData,[e.target.name]:e.target.value})
}



const handleSubmit=async(e)=>{
  e.preventDefault()

  try {

      const sendData=await axios.post("http://localhost:5000/api/create/insert",formData)

      console.log(sendData);

      

  } catch (error) {
     console.log(error);
     
  }
}


  return (
  <>

  <form  onSubmit={handleSubmit} action="">

    <input type="text" name="name" value={formData.name} placeholder='' onChange={handleChange} />
    <input type="text" name="email"  value={formData.email} placeholder='' onChange={handleChange} />
    <input type="text" name="mobile"   value={formData.mobile}placeholder='' onChange={handleChange} />

    <input type="submit" />
  

  </form>

  
  </>
  )
}

export default App
