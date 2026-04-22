import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'

const App = () => {

const [formData,setFormData]=useState({name:"",email:"",mobile:"",password:""})

const [fetchData,setFetchData]=useState([])

const handleChange=(e)=>{

  setFormData({...formData,[e.target.name]:e.target.value})
}


const getData=async()=>{

try{

  const get=await axios.get("http://localhost:5000/api/create/getdata")
  console.log(get);
  

  setFetchData(get.data.getdata)

}
catch(error){

  alert(error.response.data.msg)
}



}

useEffect(()=>{

 (async()=>{
   getData()
 })()

},[])


const handleSubmit=async(e)=>{
  e.preventDefault()

  try {

      const sendData=await axios.post("http://localhost:5000/api/create/insert",formData)

      console.log(sendData.data);

      alert(sendData.data.msg)
      setFormData({ name: "", email: "", mobile: "" });

      

  } catch (error) {

    alert(error.response.data.msg)
  }
}


  return (
  <>

  <form  onSubmit={handleSubmit} action="">

    <input type="text" name="name" value={formData.name} placeholder='' onChange={handleChange} />
    <input type="text" name="email"  value={formData.email} placeholder='' onChange={handleChange} />
    <input type="number" name="mobile"   value={formData.mobile}placeholder='' onChange={handleChange} />
    <input type="password" name="password"   value={formData.password}placeholder='' onChange={handleChange} />

    <input type="submit" />
  

  </form>


  <div>

    {
      fetchData.map((e,i)=>(

  <div key={i}>

    <p>{e.name}</p>
        <p>{e.email}</p>
            <p>{e.mobile}</p>


  </div>
      )
      )
    }
  </div>

  
  </>
  )
}

export default App
