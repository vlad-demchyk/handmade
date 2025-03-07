// import FIRST_PRCT from "../images/image_by_first_product.png";
import FIRST_BANNER from "../images/first_banner.png";
import SECOND_BANNER from "../images/second_banner.png";
import "../components_styles/headBanner.scss";
import { useEffect, useRef, useState } from "react";

function HeadBanner() {
    const IMAGE_PRODUCTS = [
        FIRST_BANNER, 
        SECOND_BANNER, 
        "htp://static.vecteezy.com/system/resources/previews/025/025/055/non_2x/promo-banner-with-knitted-clothes-balls-of-wool-knitting-item-skein-of-yarn-tools-equipment-for-knitwork-handicraft-handmade-needlework-hobby-knitting-studio-for-poster-advertising-vector.jpg"
    ];
  const wrapper = useRef(null);
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

  //   const [bannerWidth, setBannerWidth] = useState(null);
  //   const [currentSlide, setCurrentSlide] = useState[0];

  //   function calcWidth() {
  //     if (wrapper.current) {
  //       setBannerWidth(wrapper.current.offsetWidth); // зберігаємо ширину в стані
  //     }
  //   }

  //   useEffect(() => {
  //     calcWidth();
  //     window.addEventListener("resize", calcWidth);
  //     console.log(bannerWidth);

  //     return () => {
  //       window.removeEventListener("resize", calcWidth); // очищаємо слухача при розмонтуванні
  //     };
  //   }, [bannerWidth]);

  return (
    <div ref={wrapper} className="wrapper_banner">
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
              className={`dot ${index == currentSlide ? "active" : ""}`}
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
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        );
      })}
    </div>
  );

  //   return (
  // <div className="headBanner">
  //   <p>Welcome to Shop</p>
  //   <h1>
  //     HANDMADE WITH <br />
  //     <span>LOVE</span>
  //   </h1>
  //   <p>
  //     Explore our curated collection of handcrafted goods that bring warmth
  //     and uniqueness to your life.
  //   </p>
  //   <a href="#">SHOP NOW</a>
  //   <div className='img'>
  //   <img src={FIRST_PRCT} alt="image_by_product" />
  //   </div>
  // </div>
  //   );
}

export default HeadBanner;
