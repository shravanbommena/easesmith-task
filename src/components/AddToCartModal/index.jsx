/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { CartContext } from "../../context/cartContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddToCartModal = (props) => {
  const { addToCart } = useContext(CartContext);
  const history = useHistory();
  const { imagePath, title, type, rating, originalPrice, discountedPrice } =
    props.product;
  const { setShowModal } = props;
  const [showOrderPlaced, setShowOrderPlaced] = useState(false);

  const handleContinueShopping = () => {
    setShowOrderPlaced(false);
    setShowModal(false);
    history.push("/plants");
  };

  const addToCartModal = () => (
    <div className="product-card z-30 p-5 px-10 bg-white">
      <div className="relative border border-black/20 h-80 max-h-80 flex flex-col justify-between overflow-hidden mb-6">
        <div className="pc-image-div flex justify-center items-end p-2">
          <img
            className="object-contain h-full w-full"
            src={imagePath}
            alt={title}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-xl">{title}</h3>
        <p className="pc-type text-sm leading-5">{type}</p>
        <div className="flex gap-2 ">
          <div className="flex items-center text-yellow-500 mb-1">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
          <p className="font-medium text-base pc-rating">{rating}</p>
        </div>
        <div>
          <p>
            <span className="text-base line-through mr-3 pc-original-price">
              ₹ {originalPrice}
            </span>
            <span className="text-xl font-semibold pc-discounted-price">
              ₹ {discountedPrice}
            </span>
          </p>
        </div>
        <div className="w-full flex justify-between gap-1">
          <div className="flex flex-grow justify-between pc-add-to-cart-button px-2 text-white font-semibold text-base">
            <button
              type="button"
              className="flex justify-center items-center pc-add-to-cart-button-add"
              onClick={() => {
                addToCart(props.product);
                setShowOrderPlaced(true);
              }}
            >
              Confirm
            </button>
          </div>
          <button
            type="button"
            className="flex-grow pc-rent-button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const orderPlacedModal = () => (
    <div className="h-[661px] w-[453px] p-8 relative bg-white">
      <div>
        <h3 className="text-center text-[17px] mb-6">Your Cart</h3>
        <button
          type="button"
          className="absolute top-4 right-8"
          onClick={handleContinueShopping}
        >
          x
        </button>
      </div>

      <hr className="border-t border-t-[#bobobo]" />
      <div className=" h-full flex flex-col justify-between items-center">
        <h4 className="mt-[59px] mb-1 text-center text-[#165315] font-semibold text-2xl">
          Congratualations <br /> Order Placed
        </h4>

        <img
          src="/src/assets/order-placed-plant-1.png"
          alt="plant icon"
          className="size-[98px]"
        />
        <p className="text-[#165315] text-center">
          Thank you for choosing Chaperone services. We will soon get in touch
          with you!
        </p>
        <button
          type="button"
          className="mb-[104px] h-[45px] w-[307px] bg-[#165315] text-white font-semibold leading-5"
          onClick={handleContinueShopping}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );

  return (
    <div className="absolute top-0 min-h-screen w-screen bg-slate-900/35 z-10 flex justify-center items-center">
      {showOrderPlaced ? orderPlacedModal() : addToCartModal()}
    </div>
  );
};

export default AddToCartModal;
