import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./collapse.scss"; // Assurez-vous d'ajuster le chemin vers votre fichier de style

function Collapse({ description, equipments }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
    setIsEquipmentsOpen(false);
  };

  const toggleEquipments = () => {
    setIsEquipmentsOpen(!isEquipmentsOpen);
    setIsDescriptionOpen(false);
  };

  return (
    <div className="collapse-container">
      <button className="collapse-button" onClick={toggleDescription}>
        Description{" "}
        {isDescriptionOpen ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
        )}
      </button>
      {isDescriptionOpen && (
        <div className="collapse-content">
          <p>{description}</p>
        </div>
      )}

      <button className="collapse-button" onClick={toggleEquipments}>
        Equipments{" "}
        {isEquipmentsOpen ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
        )}
      </button>
      {isEquipmentsOpen && (
        <div className="collapse-content">
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Collapse;
