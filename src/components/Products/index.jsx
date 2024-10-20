import { plantList } from "../../assets/data";
import PlantFilter from "../PlantFilter";
import { IoIosArrowDown } from "react-icons/io";
import ProductCard from "../ProductCard";
import "./index.css";
import NurserySection from "../NurserySection";
import { useState } from "react";
import AddToCartModal from "../AddToCartModal";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <>
      {showModal && (
        <AddToCartModal
          product={plantList[modalIndex]}
          setShowModal={setShowModal}
        />
      )}
      <div className="px-16">
        <div className="mt-2 flex mx-auto input-div">
          <img
            src="/src/assets/search-icon.png"
            alt="search-icon"
            className="search-input-icon"
          />
          <input
            type="text"
            placeholder="Search Plant"
            className="outline-none search-input"
          />
          <img src="/src/assets/search-input-plant.png" alt="plant-icon" />
        </div>
        <div className="flex product-types-div">
          <button className="product-type-button product-plant-type-button shadow-lg">
            Plants
          </button>
          <button className="product-type-button product-pots-type-button">
            Pots
          </button>
        </div>
        <h3 className="products-page-desc">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </h3>
        {/* Nursery */}
        <NurserySection />

        {/* Products */}

        <div className=" pt-12 pb-11 flex items-start product-section">
          <PlantFilter />
          <div>
            <div className="flex items-center ps-count-and-sort">
              <span className="products-count">
                {plantList.length} products
              </span>
              {/* should be select options but for simple design using button */}
              <button
                type="button"
                className="flex justify-between items-center gap-1 text-white font-bold ps-sort-button"
              >
                SORT BY <IoIosArrowDown className="font-bold" />
              </button>
            </div>
            {/* Products */}
            <ul className="flex flex-wrap product-list">
              {plantList.map((plantDetails) => (
                <ProductCard
                  key={plantDetails.id}
                  plantDetails={plantDetails}
                  setShowModal={setShowModal}
                  setModalIndex={setModalIndex}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
