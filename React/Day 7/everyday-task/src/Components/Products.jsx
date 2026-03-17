import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products</h1>

      <Link to="/products/1">Laptop</Link><br />
      <Link to="/products/2">Mobile</Link><br />
      <Link to="/products/3">Tablet</Link>
    </div>
  );
}

export default Products;