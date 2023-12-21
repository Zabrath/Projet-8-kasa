import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ratingStar.scss";

// remplissage des étoiles avec en props le rating qui permet de rattacher les données au JSON via la page associé intégrant le composant

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
