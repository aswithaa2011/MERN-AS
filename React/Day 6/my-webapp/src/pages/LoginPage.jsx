import { useState } from "react";
import logo from "../assets/images/logo.svg";
const LoginPage = () => {


  const [input,setInput]=useState("")

  const HandleClick=(e)=>{

    setInput(e.target.value)

  } 
   return (
    <>
      <div className="p-10 flex flex-col justify-center items-center w-200">
        <div>
          <img src={logo} width={200}   alt="" />
        </div>

        <div className="border rounded border-gray-300 flex flex-col p-5 mt-5 justify-center items-center">
          <h2 className="text-gray-500 font-bold ">Login Or Signup</h2>

          <div className="flex flex-col gap-3 mb-3 justify-center items-center">
            <input onChange={HandleClick} className="border p-1 mt-3" type="text" placeholder="Enter a 10 digit Number" />
            <h6>{input}</h6>
            <button  className="rounded mt-6 p-2 w-90 10 border-2 text-center  border-purple-700">Continue</button>
          </div>

          <div className="">
        
        <h4>Buying for work?</h4>
        <a href="">Create a free business account</a>

        </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
