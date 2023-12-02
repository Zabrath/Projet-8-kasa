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

  return (
    <main className="fichelogement">
      <Caroussel images={logement.pictures} />
      <div className="fichelogement__content">
        <h1 className="fichelogement__titre">{logement.title}</h1>
        <p className="fichelogement__location">{logement.location}</p>
        <p className="fichelogement__tags">{logement.tags}</p>
        <p className="fichelogement__hostname">{logement.host.name}</p>
        <img
          className="fichelogement__image"
          src={logement.host.picture}
          alt=""
        />
        <RatingStars rating={logement.rating} />
      </div>
      <Collapse
        description={logement.description}
        equipments={logement.equipments}
      />
    </main>
  );
}

export default FicheLogement;
