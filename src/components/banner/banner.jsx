import React from "react";
import "./banner.scss";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img className="banner__image" src={image} alt="" />

      <p className="banner__texteImage">{text}</p>
    </div>
  );
}

export default Banner;
