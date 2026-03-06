import { Component } from "react";
import logo from '../assets/images/logo.jpg';
import WatchButton from "./WatchButton";

class NavBar extends Component{
render(){
      return(
        <>
<div className="Nav-items">

    
   
      <div>
             <img  className='logo-img' src={logo} alt="" />
      </div>



    <div className="Nav-links">
        <a href="" >Home</a>
        <a href="" >Cast</a>
        <a href="" >Songs</a>
        <a href="">Episodes</a>
        <a href="">Reviews</a>

        </div>
        

        <WatchButton/>


        </div>
        </>
    )
}

}
export default NavBar;

