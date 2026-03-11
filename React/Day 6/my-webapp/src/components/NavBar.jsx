import logo1 from "../assets/images/logo.svg"
import logo2 from "../assets/images/lg2.gif"
import { TbMenuDeep } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { PiSmileyMeltingLight } from "react-icons/pi";


import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
 <>
 
<div>


<div className="justify-around flex p-3  ">
  <div className=" flex w-40 gap-3" > 
    <div><img src={logo1} alt="" /></div>
    <div ><img src={logo2} alt="" /></div>
  </div>

   <div className=" flex gap-10">

    <div className="flex "> 
       <TbMenuDeep />
     <Link to="/">HOME</Link>
      </div>
   <Link to="/offers">OFFERS</Link>
 <Link to="/new">NEW</Link>
 <Link to="/magazine">MAGAZINE</Link>
   <Link to="/about">ABOUT</Link>
<Link to="/contact">CONTACT</Link>  
    
   </div>


<div className="flex gap-3  ">
 
 <div><CiSearch /></div>
 <div><CiHeart /></div>
 <div><  PiShoppingCartSimpleThin  /></div>
 <div><PiSmileyMeltingLight/></div>
 
 </div>
</div>

</div>



    <hr className=" border-gray-200" />
 </>
  )
}

export default NavBar
