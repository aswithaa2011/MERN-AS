import { Component } from "react";
import img1 from '../assets/images/img1.webp'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'

class BannerImg extends Component{
    render(){
         return(
        <>
         <div  className='img-container'>

            <img className='bg-img' src={img1} alt="" />
            <img className='bg-img'src={img2} alt="" />
            <img className='bg-img'src={img3} alt="" />
            <img className='bg-img'src={img4} alt="" />
            <img className='bg-img'src={img5} alt="" />
             <img className='bg-img'src={img6} alt="" />



         </div>
        
             
        </>
    )
    }
}
export default BannerImg;