import img1 from '../assets/images/1.webp'
import img2 from '../assets/images/2.webp'
import img3 from '../assets/images/3.webp'
import img4 from '../assets/images/4.webp'
import img5 from '../assets/images/img5.webp'
import img6 from '../assets/images/img6.webp'
import img7 from '../assets/images/img7.webp'
import img8 from '../assets/images/8.webp'
import img9 from '../assets/images/9.webp'
import img10 from '../assets/images/10.webp'
import img11 from '../assets/images/11.webp'
import img12 from '../assets/images/12.webp'
import img13 from '../assets/images/13.webp'
import img14 from '../assets/images/14.webp'
import img15 from '../assets/images/15.webp'
import img16 from '../assets/images/16.webp'

import { CiHeart } from "react-icons/ci";

const Cards = () => {

  const List = [
    { img: img1, name: "Glowra Hydrating Primer", price: 499, offprice: 799, percent: "38% OFF" },
    { img: img2, name: "Glowra Matte Compact Powder", price: 299, offprice: 599, percent: "50% OFF" },
    { img: img3, name: "Glowra Gentle Makeup Remover", price: 349, offprice: 699, percent: "50% OFF" },
    { img: img4, name: "Glowra Waterproof Kajal", price: 199, offprice: 399, percent: "50% OFF" },
    { img: img5, name: "Glowra Vitamin C Serum", price: 599, offprice: 999, percent: "40% OFF" },
    { img: img6, name: "Glowra Lip & Cheek Tint", price: 249, offprice: 499, percent: "50% OFF" },
    { img: img7, name: "Glowra Glow Face Wash", price: 199, offprice: 349, percent: "43% OFF" },
    { img: img8, name: "Glowra Sunscreen SPF 50", price: 399, offprice: 699, percent: "42% OFF" },
    { img: img9, name: "Glowra Liquid Foundation", price: 549, offprice: 899, percent: "39% OFF" },
    { img: img10, name: "Glowra Eyeliner Pen", price: 179, offprice: 349, percent: "48% OFF" },
    { img: img11, name: "Glowra Lipstick Matte", price: 299, offprice: 599, percent: "50% OFF" },
    { img: img12, name: "Glowra BB Cream", price: 399, offprice: 699, percent: "42% OFF" },
    { img: img13, name: "Glowra Face Mist", price: 249, offprice: 499, percent: "50% OFF" },
    { img: img14, name: "Glowra Highlighter", price: 349, offprice: 699, percent: "50% OFF" },
    { img: img15, name: "Glowra Compact Mirror Kit", price: 199, offprice: 399, percent: "50% OFF" },
    { img: img16, name: "Glowra Skincare Combo", price: 799, offprice: 1299, percent: "38% OFF" },
  ]

  return (
    <>
      <div className='max-w-7xl mx-auto px-6 mt-10'>
        
        {/* GRID LAYOUT */}
        <div className='grid grid-cols-4 gap-6'>

          {List.map((e, i) => (

            <div 
              key={i} 
              className="border rounded-lg p-3 shadow-sm hover:shadow-md transition duration-300"
            >

              {/* IMAGE */}
              <img 
                src={e.img} 
                className='w-full h-60 object-cover rounded-md' 
                alt={e.name} 
              />

              {/* NAME */}
              <h1 className='text-sm font-medium mt-2'>
                {e.name}
              </h1>

              {/* PRICE */}
              <div className='flex gap-2 items-center mt-1'>
                <p className='font-semibold'>₹{e.price}</p>
                <del className='text-gray-400 text-sm'>₹{e.offprice}</del>
                <p className='text-green-600 text-sm'>{e.percent}</p>
              </div>

              {/* BUTTON + HEART */}
             <div className='flex items-center gap-2 mt-3'>

  <button  className='border border-purple-700 text-purple-700 px-3 py-1 rounded hover:bg-purple-700 hover:text-white transition'>
    Add to Cart
  </button>

  <CiHeart className="text-2xl border p-1 rounded-full cursor-pointer hover:text-red-500" />

</div>

            </div>

          ))}

        </div>

      </div>
    </>
  )
}

export default Cards