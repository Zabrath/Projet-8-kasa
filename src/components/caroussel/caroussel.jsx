import React, { useState } from "react";
import "./caroussel.scss";

// création d'un carrousel avec image en props a remplir dans la page qui intègre le composant

function Caroussel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = images.length;

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  if (totalImages === 1) {
    return (
      <div className="pictures-carousel">
        <img src={images[0]} alt="" />
      </div>
    );
  }

  return (
    <div className="pictures-carousel">
      <button className="carousel-arrow arrow__left" onClick={prevImage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none">
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
      </button>
      <button className="carousel-arrow arrow__right" onClick={nextImage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none">
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </svg>
      </button>
      <p className="compteur">
        {currentImageIndex + 1} / {totalImages}
      </p>
      <img src={images[currentImageIndex]} alt="" />
    </div>
  );
}

export default Caroussel;
