import React from 'react'

const ProductDetails = ({productdata}) => {
  return (
    <>
      
   {
    productdata.map((e,i)=>(

        <div >
            <div key={i}>

                <p>Product Name: {e.productName}</p>
                <p> Id: {e.id}</p>
                <p>Price: {e.price}</p>
</div>
            </div>
    ))
   }

</>


  )
}

export default ProductDetails
