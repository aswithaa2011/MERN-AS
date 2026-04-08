
 import logo from "../assets/images/logo.svg";
const AdminLogin = () => {




   

  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <img src={logo}  className="w-52 mb-6" alt="logo" />

      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h2 className="text-gray-700 font-bold text-2xl mb-2">Admin Login</h2>
        <p className="text-gray-500 text-sm mb-6">Enter your credentials</p>

        <form  className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Admin Email"
            className="border w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#8E1C9D] transition"
          />

          <input
            type="password"
            name="password"
            // onChange={handleChange}
            placeholder="Enter Password"
            className="border w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#8E1C9D] transition"
            // disabled={loading}
          />


          <button
            type="submit"
            className="bg-[#8E1C9D] hover:bg-[#7a1787] disabled:bg-gray-400 text-white w-full p-3 rounded-lg font-semibold transition"
          >Login
          </button>

          <p className="text-sm text-gray-600 mt-4">
            <a href="/login" className="text-[#8E1C9D] font-medium hover:underline">
              Back to User Login
            </a>
          </p>
        </form>
      </div>
    </div>


    </>
  )
}

export default AdminLogin
