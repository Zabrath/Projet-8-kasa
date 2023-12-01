import React from "react";
import { useParams } from "react-router-dom";
import Caroussel from "../../components/caroussel/caroussel";
import Collapse from "../../components/collapse/collapse";
import RatingStars from "../../components/ratingStar/ratingStar";
import "./fichelogement.scss";

function FicheLogement({ logements }) {
  const { logementId } = useParams();

  const logement = logements.find((logement) => logement.id === logementId);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <main className="fichelogement">
      <Caroussel images={logement.pictures} />
      <h1 className="titre">{logement.title}</h1>
      <p className="location">{logement.location}</p>
      <p className="tags">{logement.tags}</p>
      <p className="hostname">{logement.host.name}</p>
      <img className="image" src={logement.host.picture} alt="" />
      <RatingStars className="ratingStar" rating={logement.rating} />
      <Collapse
        description={logement.description}
        equipments={logement.equipments}
      />
    </main>
  );
}

export default FicheLogement;
