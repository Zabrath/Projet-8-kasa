// import React from "react";
// import { useParams } from "react-router-dom";
// import "./fichelogement.scss";

// function FicheLogement({ logements }) {
//   const { logementId } = useParams();

//   const logement = logements.find((logement) => logement.id === logementId);

//   if (!logement) {
//     return <div>Logement non trouvé</div>;
//   }

//   return (
//     <div className="fichelogement">
//       <h1>{logement.title}</h1>
//       <div className="pictures-carousel">
//         {logement.pictures.map((picture, index) => (
//           <img key={index} src={picture} alt={`Picture ${index}`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FicheLogement;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./fichelogement.scss";

function FicheLogement({ logements }) {
  const { logementId } = useParams();
  const logement = logements.find((logement) => logement.id === logementId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const totalImages = logement.pictures.length;

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="fichelogement">
      <div className="pictures-carousel">
        <button className="carousel-arrow arrow__left" onClick={prevImage}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="carousel-arrow arrow__right" onClick={nextImage}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <img src={logement.pictures[currentImageIndex]} alt="" />
      </div>
    </main>
  );
}

export default FicheLogement;
