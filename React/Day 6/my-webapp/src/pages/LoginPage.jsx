import { useState } from "react";
import logo from "../assets/images/logo.svg";

const LoginPage = () => {
  const [input, setInput] = useState("");

  const HandleClick = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      
    
      <img src={logo} className="w-52 mb-6" alt="logo" />

  
      <div className="bg-white shadow-lg rounded-xl p-8 w-[350px] text-center">
        
        <h2 className="text-gray-500 font-bold mb-4">
          Login Or Signup
        </h2>

        <input
          onChange={HandleClick}
          className="border w-full p-2 rounded mb-4 outline-none focus:ring-2 focus:ring-[#8E1C9D]"
          type="text"
          placeholder="Enter a 10 digit Number"
        />
        <h5>{input}</h5>

        <button className="bg-[#8E1C9D] hover:bg-[#7a1787] text-white w-full p-3 rounded-xl mb-4">
          Continue
        </button>

        <div className="text-sm text-gray-600">
          <p>Buying for work?</p>
          <a href="#" className="text-[#8E1C9D] font-medium">
            Create a free business account
          </a>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;