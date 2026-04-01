import logo1 from "../assets/images/logo.svg"
import logo2 from "../assets/images/lg2.gif"
import { CiHeart, CiSearch } from "react-icons/ci"
import { PiShoppingCartSimpleThin, PiSmileyMeltingLight } from "react-icons/pi"
import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "./Authentication/AuthContext"
import { FaUserCircle } from "react-icons/fa"

const NavBar = () => {

  const { datas } = useContext(AuthContext)

  return (
    <>
      <div className="w-full bg-white shadow-sm sticky top-0 z-50">
        
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          <div className="flex items-center gap-3 w-40">
            <img src={logo1} alt="" />
            <img className="h-8" src={logo2} alt="" />
          </div>

          <div className="flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-purple-600 transition">HOME</Link>
            <Link to="/offers" className="hover:text-purple-600 transition">OFFERS</Link>
            <Link to="/new" className="hover:text-purple-600 transition">NEW</Link>
            <Link to="/magazine" className="hover:text-purple-600 transition">MAGAZINE</Link>
            <Link to="/about" className="hover:text-purple-600 transition">ABOUT</Link>
            <Link to="/contact" className="hover:text-purple-600 transition">CONTACT</Link>
          </div>

          <div className="flex items-center gap-4 text-xl">
            <CiSearch className="cursor-pointer hover:text-purple-600 transition" />
            <CiHeart className="cursor-pointer hover:text-red-500 transition" />
            <PiShoppingCartSimpleThin className="cursor-pointer hover:text-purple-600 transition" />
            <PiSmileyMeltingLight className="cursor-pointer hover:text-yellow-500 transition" />
          </div>

          <div>
            {datas.status ? (
              <FaUserCircle className="text-3xl text-purple-600 bg-purple-100 p-1 rounded-full cursor-pointer hover:scale-105 transition" />
            ) : (
              <NavLink
                to={"/Login"}
                className="px-4 py-1 border-2 border-purple-700 text-purple-700 rounded hover:bg-purple-700 hover:text-white transition"
              >
                Login
              </NavLink>
            )}
          </div>

        </div>

        <hr className="border-gray-200" />
      </div>
    </>
  )
}

export default NavBar