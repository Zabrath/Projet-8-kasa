import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

function Card({ logement }) {
  return (
    <Link to={`/fichelogement/${logement.id}`}>
      <div className="card">
        <h3 className="card__title">{logement.title}</h3>
        <img
          className="card__image"
          src={logement.cover}
          alt={logement.title}
        />
      </div>
    </Link>
  );
}

export default Card;
