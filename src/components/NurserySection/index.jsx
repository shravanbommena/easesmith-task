/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nurseryList } from "../../assets/data";
import "./index.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}

const NurserySection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="">
      <h3 className="text-2xl font-semibold nursery-title">Nursery</h3>
      <div className="px-7">
        <div className="slider-container">
          <Slider {...settings}>
            {nurseryList.map((nurseryItem) => {
              return (
                <div key={nurseryItem.imagePath}>
                  <div className="flex flex-col items-center">
                    <img
                      src={nurseryItem.imagePath}
                      alt={nurseryItem.desc}
                      className="nursery-item-image mb-6"
                    />
                    <p className="text-center text-sm font-medium nursery-item-desc">
                      {nurseryItem.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NurserySection;
