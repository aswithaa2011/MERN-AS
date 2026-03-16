import img1 from '../assets/images/1.webp'
import img2 from '../assets/images/2.webp'
import img3 from '../assets/images/3.webp'
import img4 from '../assets/images/4.webp'
import { CiHeart } from "react-icons/ci";
const Home = () => {

  const List=[{img:img1,name:"NY BAE PRIMER KIT",price:699,offprice:999 ,percent:"35% OFF"},
   {img:img2,name:"NY BAE 2 in 1 Compact+",price:289,offprice:780 ,percent:"35% OFF"},
   {img:img3,name:"NY BAE Makeup Remover",price:321,offprice:1289 ,percent:"35% OFF"},
   {img:img4 ,name:"NY BAE Kajal Waterproof",price:299,offprice:899 ,percent:"35% OFF"}
  ]
  return (


    <>
      <div className='flex justify-center items-center gap-10  p-13'>

{
  List.map((e,i)=>(
    
<div key={i} className="justify-center items-center flex p-2 border" >


<div className='flex flex-col justify-center gap-1'>
   <img src={e.img} className='w-200 h-80' alt={e.name} />
 <h1> {e.name}</h1>
  <div className='flex gap-2'>
  <p>{e.price}</p>
  <del> {e.offprice}</del>
  <p>{e.percent}</p>
</div>
 <div className='flex justify-center items-center gap-5'>

  <button className=' rounded p-2 w-50 10 border-2  border-purple-700'>Add to Cart</button>
  < CiHeart className="text-4xl border-2 p-1 border-gray-400 rounded-2xl"/>
  
 

</div>

</div>

</div>



  ))
}
      </div>
    </>
  )
}

export default Home