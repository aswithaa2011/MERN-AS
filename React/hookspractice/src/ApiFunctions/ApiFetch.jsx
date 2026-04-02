import React, { useEffect, useState } from 'react'

const ApiFetch = () => {

    const [data,setData]=useState([])
    const [search,setSearch]=useState("")

const FetchData=async()=>{
 try{

    const getData=await fetch('https://dummyjson.com/products')

    console.log(getData)
    const res=await getData.json()

    localStorage.setItem("product",JSON.stringify(res))

    console.log(res.products)

    setData(res.products)




 }
 catch(err){

console(err)

 }



}

 useEffect(()=>{
  
FetchData()
 },[])




 const handleChange=(e)=>{

  setSearch(e.target.value)
 }


const filterdata=data.filter((e)=>e.title.toLowerCase().include(search.toLowerCase()))

console.log(filterdata);


  return (
<>


<div className='bg-amber-200'>

  <input type="text" placeholder='Search' className='w-50 m-3 bg-white ' onChange={handleChange} />
</div>

<div className='bg-gray-100 flex flex-wrap justify-center items-center gap-4 p-3' >
  {data.map((e) => (
    <div  key={e.id} className='bg-purple-500 flex flex-col gap-2 w-90 h-90 rounded-xl justify-center items-center'>
      <h1>{e.title}</h1>
      <p>Price: ${e.price}</p>
      <p>{e.description}</p>
      <img src={e.thumbnail} alt={e.title} width="100" />
      <button className='bg-black rounded-2xl p-2 text-white'>view more</button>
 
    </div>
  ))}
</div>
</>
  )
}

export default ApiFetch
