import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

function Card({ logement }) {
  return (
    <Link to={`/fichelogement/${logement.id}`}>
      <div className="card">
        <img
          className="card__image"
          src={logement.cover}
          alt={logement.title}
        />
        <div className="card__content">
          <h3 className="card__title">{logement.title}</h3>
          {/* Ajoute d'autres éléments en fonction de tes besoins */}
        </div>
      </div>
    </Link>
  );
}

export default Card;
