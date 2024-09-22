import { useState } from "react";
import "./Slider.scss";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <button className="slider__prevButton" onClick={prevSlide}>
        &#8249;
      </button>

      <div
        className="slider__content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slider__slide slide">
            <img src={slide.image} alt={slide.title} className="slide__image" />
            <h3 className="slide__title">{slide.title}</h3>
          </div>
        ))}
      </div>

      <button className="slider__nextButton" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Slider;
