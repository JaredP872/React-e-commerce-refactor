import { useState } from "react";
import "../styles/Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://i.ytimg.com/vi/IwS4kAusqCc/sddefault.jpg",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-model-unselect-gallery-1-202309_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1692810662701",
    "https://images.macrumors.com/t/t0HGgkcxSch3BjyR0h1ouAm-pTM=/1600x0/article-new/2024/09/iphone-16-design.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      {/* Navigation Buttons */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots for Navigation */}
      <div className="dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
