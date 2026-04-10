import logo1 from "../../assets/images/logo.svg";
import logo2 from "../../assets/images/lg2.gif";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleThin, PiSmileyMeltingLight } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Authentication/AuthContext";
import CardContext from "../Cart/CardContext";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { datas, setDatas } = useContext(AuthContext);
  const { cartItems } = useContext(CardContext);
  const navigate = useNavigate();

  const totalCartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setDatas({ status: false });
    navigate("/login");
  };

  const navLinkClass =
    "relative text-[15px] font-semibold text-gray-700 transition duration-300 hover:text-purple-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-fit items-center gap-3">
          <img src={logo1} alt="logo" className="h-10 w-auto object-contain" />
          <img src={logo2} alt="logo animation" className="h-8 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          <Link to="/" className={navLinkClass}>HOME</Link>
          <Link to="/offers" className={navLinkClass}>OFFERS</Link>
          <Link to="/about" className={navLinkClass}>ABOUT</Link>
          <Link to="/contact" className={navLinkClass}>CONTACT</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <button className="hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[22px] text-gray-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700">
            <CiSearch />
          </button>

          <button className="hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[22px] text-gray-700 transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600">
            <CiHeart />
          </button>

          <Link
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[22px] text-gray-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
          >
            <PiShoppingCartSimpleThin />
            {datas?.status && totalCartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-purple-700 px-1 text-[11px] font-bold text-white shadow-md">
                {totalCartCount}
              </span>
            )}
          </Link>

          <button className="hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[21px] text-gray-700 transition hover:border-yellow-200 hover:bg-yellow-50 hover:text-yellow-600">
            <PiSmileyMeltingLight />
          </button>

          {datas?.status ? (
            <div className="flex items-center gap-3 pl-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-violet-200 text-[24px] text-purple-700 shadow-sm ring-1 ring-purple-100">
                <FaUserCircle />
              </div>

              <button
                onClick={handleLogout}
                className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="rounded-full bg-gradient-to-r from-purple-700 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:from-purple-800 hover:to-violet-700"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
