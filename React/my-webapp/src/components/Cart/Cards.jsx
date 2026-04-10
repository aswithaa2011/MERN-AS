import img1 from "../../assets/images/1.webp";
import img2 from "../../assets/images/2.webp";
import img3 from "../../assets/images/3.webp";
import img4 from "../../assets/images/4.webp";
import img5 from "../../assets/images/img5.webp";
import img6 from "../../assets/images/img6.webp";
import img7 from "../../assets/images/img7.webp";
import img8 from "../../assets/images/8.webp";
import img9 from "../../assets/images/9.webp";
import img10 from "../../assets/images/10.webp";
import img11 from "../../assets/images/11.webp";
import img12 from "../../assets/images/12.webp";
import img13 from "../../assets/images/13.webp";
import img14 from "../../assets/images/14.webp";
import img15 from "../../assets/images/15.webp";
import img16 from "../../assets/images/16.webp";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardContext from "./CardContext";
import AuthContext from "../Authentication/AuthContext";

const Cards = () => {
  const { addToCart } = useContext(CardContext);
  const { datas } = useContext(AuthContext);
  const navigate = useNavigate();

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
  ];

  const handleAddToCart = (item) => {
    if (!datas?.status) {
      alert("Please login or sign in first");
      navigate("/login");
      return;
    }

    addToCart(item);
    alert("Item added to cart");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Trending Beauty Picks</h2>
          <p className="mt-2 text-sm text-gray-500">Add your favorites and review them in a modern cart view.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {List.map((e, i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={e.img}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                alt={e.name}
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-700 shadow">
                {e.percent}
              </span>
            </div>

            <div className="p-4">
              <h1 className="line-clamp-2 min-h-12 text-sm font-semibold text-gray-800">
                {e.name}
              </h1>

              <div className="mt-3 flex items-center gap-2">
                <p className="text-lg font-bold text-gray-900">Rs. {e.price}</p>
                <del className="text-sm text-gray-400">Rs. {e.offprice}</del>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => handleAddToCart(e)}
                  className="flex-1 rounded-full bg-purple-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  Add to Cart
                </button>

                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-xl text-gray-600 transition hover:border-red-200 hover:text-red-500">
                  <CiHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
