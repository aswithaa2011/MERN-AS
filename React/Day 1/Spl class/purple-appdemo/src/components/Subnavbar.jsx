import logo1 from "../assets/images/logo.svg"
import logo2 from "../assets/images/lg2.gif"
import { TbMenuDeep } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { PiSmileyMeltingLight } from "react-icons/pi";


import { CiSearch } from "react-icons/ci";


const Subnavbar = () => {
  return (
 <>
 
<div>


<div className="justify-around flex p-3 ">
  <div className=" flex w-30" > 
    <div><img src={logo1} alt="" /></div>
    <div ><img src={logo2} alt="" /></div>
  </div>

   <div className=" flex gap-10">

    <div className="flex "> 
       <TbMenuDeep />
      <div> SHOP CATEGORIES</div>
      </div>
    <div>BRANDS</div>
    <div>OFFERS</div>
    <div>NEW</div>
    <div>SPLURGE</div>
    <div>MAGAZINE</div>
    <div>ELITE OFFERS</div>
   </div>


<div className="flex gap-3  ">
 
 <div><CiSearch /></div>
 <div><CiHeart /></div>
 <div><  PiShoppingCartSimpleThin  /></div>
 <div><PiSmileyMeltingLight/></div>
 
 </div>
</div>

</div>



    <hr className="border-t-1  border-gray-200" />
 </>
  )
}

export default Subnavbar
