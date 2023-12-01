import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ratingStar.scss";

const RatingStars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={`fa-star ${index < rating ? "filled" : ""}`}
    />
  ));

  return <div className="rating-stars">{stars}</div>;
};

export default RatingStars;
