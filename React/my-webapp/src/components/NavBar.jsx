import logo1 from "../assets/images/logo.svg"
import logo2 from "../assets/images/lg2.gif"
import { TbMenuDeep } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { PiSmileyMeltingLight } from "react-icons/pi";


import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
  return (
 <>
 
<div>


<div className="justify-center items-center gap-30 flex p-3  ">
  <div className=" flex mr-10 w-40 gap-3" > 
    <div><img src={logo1} alt="" /></div>
    <div ><img className="h-8" src={logo2} alt="" /></div>
  </div>

   <div className=" flex gap-10">

    <div className="flex "> 
      
     <Link to="/">HOME</Link>
      </div>
   <Link to="/offers">OFFERS</Link>
 <Link to="/new">NEW</Link>
 <Link to="/magazine">MAGAZINE</Link>
   <Link to="/about">ABOUT</Link>
<Link to="/contact">CONTACT</Link>  


    
   </div>


<div className="flex gap-3 text-2xl ">
 
 <div><CiSearch /></div>
 <div><CiHeart /></div>
 <div><  PiShoppingCartSimpleThin  /></div>
 <div><PiSmileyMeltingLight/></div>
 
 </div>

 <NavLink to={"/Login"} className="rounded p-2 w-30 10 border-2 text-center  border-purple-700"> Login</NavLink>
</div>

</div>



    <hr className=" border-gray-200" />
 </>
  )
}

export default NavBar
