import ProductDetails from "./ProductDetails"


const Products = () => {
  
    const Items=[{id:1,productName:"laptop",price:50000},
    {id:2,productName:"mobile",price:9000},
    {id:3,productName:"lipstick",price:500}]


    return (

<>

<div>
<h1>ProductDetials</h1>
<ProductDetails productdata={Items} />
</div>
</>
  )
}

export default Products
