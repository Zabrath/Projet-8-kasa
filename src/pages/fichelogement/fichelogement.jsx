import React from "react";
import { useParams } from "react-router-dom";
import Caroussel from "../../components/caroussel/caroussel";
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
      <h1>{logement.title}</h1>
    </main>
  );
}

export default FicheLogement;
