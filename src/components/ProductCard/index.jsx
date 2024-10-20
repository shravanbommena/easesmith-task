/* eslint-disable react/prop-types */
import { GrFavorite } from "react-icons/gr";
import { BsStarFill } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa6";
import "./index.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProductCard = (props) => {
  const history = useHistory();
  //   console.log(history);
  const { id, imagePath, title, type, rating, originalPrice, discountedPrice } =
    props.plantDetails;

  const { setShowModal, setModalIndex } = props;

  const handleAddToCartButton = () => {
    setModalIndex(id - 1);
    setShowModal(true);
  };

  const handleViewProductButton = () => {
    // using history.push(path, state) to send plantDetails to thank you page
    history.push("/thank-you", { plantDetails: props.plantDetails });
  };

  return (
    <li className="product-card">
      <div className="relative border border-black/20 h-80 max-h-80 flex flex-col justify-between overflow-hidden mb-6">
        <div className="pc-image-div flex justify-center items-end p-2">
          <img
            className="object-contain h-full w-full"
            src={imagePath}
            alt={title}
          />
          <button className="absolute top-2 right-2" type="button">
            <GrFavorite className="text-2xl text-black/60" />
          </button>
        </div>
        <button
          type="button"
          className="pc-view-product-button font-semibold text-base text-white"
          onClick={handleViewProductButton}
        >
          View Product
        </button>
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
            <button type="button" className="pc-add-to-cart-button-minus">
              <FaMinus />
            </button>
            <button
              type="button"
              className="flex justify-between items-center pc-add-to-cart-button-add"
              onClick={handleAddToCartButton}
            >
              Add to cart <FaPlus />
            </button>
          </div>
          <button type="button" className="flex-grow pc-rent-button">
            Buy on Rent
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
