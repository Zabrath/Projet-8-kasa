import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

function Card({ logement }) {
  return (
    <div className="card">
      <h3 className="card__title">{logement.title}</h3>
      <Link to={`/fichelogement/${logement.id}`}>
        <img
          className="card__image"
          src={logement.cover}
          alt={logement.title}
        />
      </Link>
    </div>
  );
}

export default Card;
