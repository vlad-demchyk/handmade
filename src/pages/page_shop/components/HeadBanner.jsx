// import FIRST_PRCT from "../images/image_by_first_product.png";
import FIRST_BANNER from "../images/first_banner.png";
import SECOND_BANNER from "../images/second_banner.png";
import "../components_styles/headBanner.scss";
import { useEffect, useRef, useState } from "react";

function HeadBanner() {
    const IMAGE_PRODUCTS = [
        FIRST_BANNER, 
        SECOND_BANNER, 
        "https://th.bing.com/th/id/R.43112eb4a8ef502d1dd93438943c6b7f?rik=XYZxKCMAlrRG6Q&pid=ImgRaw&r=0"
    ];
  // const wrapper = useRef(null);
  const intervalRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current); // Очищаємо попередній інтервал
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGE_PRODUCTS.length);
    }, 20000);
  };


  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleNext = () => {
      startAutoSlide();
    setCurrentSlide((prev) => (prev + 1) % IMAGE_PRODUCTS.length);

  };
  const handleBack = () => {
      startAutoSlide();
    setCurrentSlide(
      (prev) => (prev - 1 + IMAGE_PRODUCTS.length) % IMAGE_PRODUCTS.length
    );
  };

  return (
    <div className="wrapper_banner">
      <button
        className="arrowStyles left"
        onClick={() => handleBack()}
      ></button>
      <button
        className="arrowStyles right"
        onClick={() => handleNext()}
      ></button>
      <div className="dotsNav">
        {IMAGE_PRODUCTS.map((prd, index) => {
          return (
            <div
              onClick={() => {setCurrentSlide(index); startAutoSlide()}}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              key={index}
              aria-label="point-navigation"
            ></div>
          );
        })}
      </div>
      {IMAGE_PRODUCTS.map((image, index) => {
        return (
          <div
            className={`slider ${index === currentSlide ? "active" : ""} `}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="slider-content">
              <p>Welcome to Shop</p>
              <h1>
                HANDMADE WITH <br />
                <span>LOVE</span>
              </h1>
              <p>
                Explore our curated collection of handcrafted goods that bring
                warmth and uniqueness to your life.
              </p>
              <a href="#link">SHOP NOW</a>
            </div>
          </div>
        );
      })}
    </div>
  );

}

export default HeadBanner;
