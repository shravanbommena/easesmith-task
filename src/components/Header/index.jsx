import { useContext } from "react";
import "./index.css";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="h-24 flex justify-center items-end px-12 pb-3">
      <div className="w-full flex justify-between items-center">
        <Link to="/plants">
          <div className="flex items-center gap-2">
            <img src="/images/site-logo.png" alt="site logo" />
            <h1 className="text-[#0f4811] font-semibold text-2xl">Cheparone</h1>
          </div>
        </Link>
        <ul className="flex gap-8 font-medium text-base">
          <li>
            <Link to="/plants">Home</Link>
          </li>
          <li className="text-[#f3a939] flex flex-col items-center">
            Plants & Pots
            <hr className="border-top border-t-[#f3a939] w-7" />
          </li>
          <li>Tools</li>
          <li>Our Services</li>
          <li>Blog</li>
          <li>Our Story</li>
          <li>FAQs</li>
        </ul>
        <div className="flex gap-3">
          <div className="flex flex-col justify-end items-center gap-1">
            <img
              src="/images/account profile.png"
              alt="profile-icon"
              className="size-5"
            />
            <p className="text-sm font-medium">My Profile</p>
          </div>
          <div className="flex flex-col items-center gap-1 relative">
            <div className="rounded-full size-[19px] absolute top-[-15px] right-[-8px] flex items-center justify-center cart-count font-light">
              <span>{cart.length}</span>
            </div>
            <img
              src="/images/cart.png"
              alt="cart"
              className="size-7 mb-[-4px]"
            />
            <p className="text-sm font-medium">Cart</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
