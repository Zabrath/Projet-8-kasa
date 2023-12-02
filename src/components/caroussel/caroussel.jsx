import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./caroussel.scss";

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
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button className="carousel-arrow arrow__right" onClick={nextImage}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <p className="compteur">
        {currentImageIndex + 1} / {totalImages}
      </p>
      <img src={images[currentImageIndex]} alt="" />
    </div>
  );
}

export default Caroussel;
