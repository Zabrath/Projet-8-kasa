import React from "react";
import "./banner.scss";

// creation de la banner via des props a remplir a chaques intégration du composant dans une page

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img className="banner__image" src={image} alt="" />

      <p className="banner__texteImage">{text}</p>
    </div>
  );
}

export default Banner;
