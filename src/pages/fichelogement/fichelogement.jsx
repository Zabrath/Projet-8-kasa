import React from "react";
import { useParams } from "react-router-dom";
import Caroussel from "../../components/caroussel/caroussel";
import Collapse from "../../components/collapse/collapse";
import RatingStars from "../../components/ratingStar/ratingStar";
import Error from "../error/error";
import "./fichelogement.scss";

function FicheLogement({ logements }) {
  const { logementId } = useParams();

  const logement = logements.find((logement) => logement.id === logementId);

  if (!logement) {
    return <Error />;
  }

  const tagsList = logement.tags.map((tag, index) => (
    <li key={index} className="fichelogement__tag">
      {tag}
    </li>
  ));

  return (
    <main className="fichelogement">
      <Caroussel images={logement.pictures} />
      <div className="fichelogement__content">
        <div className="fichelogement__columnLeft">
          <h1 className="fichelogement__titre">{logement.title}</h1>
          <p className="fichelogement__location">{logement.location}</p>
          <ul className="fichelogement__tags">{tagsList}</ul>
        </div>
        <div className="fichelogement__columnRight">
          <div className="fichelogement__row">
            <p className="fichelogement__hostname">{logement.host.name}</p>
            <img
              className="fichelogement__image"
              src={logement.host.picture}
              alt=""
            />
          </div>
          <RatingStars rating={logement.rating} />
        </div>
      </div>

      <Collapse
        description={logement.description}
        equipments={logement.equipments}
      />
    </main>
  );
}

export default FicheLogement;
