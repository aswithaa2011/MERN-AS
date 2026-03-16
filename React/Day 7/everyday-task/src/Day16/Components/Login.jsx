import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

  const Navigate=useNavigate()

  const clickTOCHANGE=()=>{

    Navigate("/dashboard")

  

  }
  return (
   



    <button onClick={clickTOCHANGE} className='bg-black text-blue-400 rounded text-xl  w-50 p-3 m-9' >
      login
    </button>
  )
}

export default Login
