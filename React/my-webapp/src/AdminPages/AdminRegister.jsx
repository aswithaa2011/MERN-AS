
 import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { CgPassword } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
const AdminRegister = () => {

const [formdata,setFormData]=useState({name:"",email:"",password:""})

const [saveData,setSaveData]=useState([])

const navigate=useNavigate()

  const handleChange=(e)=>{

    setFormData({...formdata,[e.target.name]:e.target.value})

    
    }

 const handleClick=()=>{

       setSaveData(formdata)

localStorage.setItem("Register",JSON.stringify(saveData))

alert("Registered Successfully")

navigate("/admin/login")




 }
   

  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <img src={logo}  className="w-52 mb-6" alt="logo" />

      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h2 className="text-gray-700 font-bold text-2xl mb-2">Admin Register</h2>

        <form  className="space-y-4">

             <input
            type="text"
            name="name"
         onChange={handleChange}

            placeholder="Enter Name"
            className="border w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#8E1C9D] transition"
          />
          <input
            type="email"
            name="email"
                         onChange={handleChange}

            placeholder="Enter Admin Email"
            className="border w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#8E1C9D] transition"
          />
     
          <input
            type="password"
            name="password"
             onChange={handleChange}
            placeholder="Create a Password"
            className="border w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#8E1C9D] transition"
            // disabled={loading}
          />


          <button
            type="submit"
            className="bg-[#8E1C9D] hover:bg-[#7a1787] disabled:bg-gray-400 text-white w-full p-3 rounded-lg font-semibold transition"

            onClick={handleClick}


          >Register
          </button>

          <p className="text-sm text-gray-600 mt-4">
            <a href="/" className="text-[#8E1C9D] font-medium hover:underline">
              
                Back to Home
            </a>
          </p>
        

        
        </form>
      </div>
    </div>

    </>
  )
}

export default AdminRegister;
