import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./collapse.scss";

function Collapse({ description, equipments }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipments = () => {
    setIsEquipmentsOpen(!isEquipmentsOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-section">
        <button className="collapse-button">
          Description
          <FontAwesomeIcon
            className="collapse-icon"
            icon={isDescriptionOpen ? faAngleUp : faAngleDown}
            onClick={() => toggleDescription()}
          />
        </button>
        {isDescriptionOpen && (
          <div className="collapse-content">
            <p>{description}</p>
          </div>
        )}
      </div>

      <div className="collapse-section">
        <button className="collapse-button">
          Equipements
          <FontAwesomeIcon
            className="collapse-icon"
            icon={isEquipmentsOpen ? faAngleUp : faAngleDown}
            onClick={() => toggleEquipments()}
          />
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
    </div>
  );
}

export default Collapse;
