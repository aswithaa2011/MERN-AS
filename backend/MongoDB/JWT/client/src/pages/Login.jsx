import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
  
    userPassword: "",
    userEmail: "",
  });

  const navigate=useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sendData = await axios.post("http://localhost:5000/api/create/Login", formData);
      alert(sendData.data.msg);
      setFormData({userPassword: "",userEmail: ""})
      console.log(sendData.data.token);
      
      localStorage.setItem("jwToken",sendData.data.token)
      navigate("/dashboard")

    } 
    catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <>

    <div >
      <form onSubmit={handleSubmit} action=""
      className="flex flex-col gap-3 p-2"
      >
       
        <input
          type="text"
          name="userEmail"
          onChange={handleChange}
          placeholder="enter the email"
          value={formData.userEmail}
           className="border w-60 rounded p-2"
        />
        <input
          type="text"
          name="userPassword"
          onChange={handleChange}
          placeholder="enter the password"
          value={formData.userPassword}
           className="border w-60 rounded p-2"
        />

        <input type="submit" value={"Login"}
         className="border w-60 rounded p-2 bg-black text-white"
          />
      </form>

      </div>
    </>
  );
};
export default Register;
