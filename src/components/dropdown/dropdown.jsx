import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./dropdown.scss";

function Dropdown({ title, text }) {
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  const toggleEquipments = () => {
    setIsEquipmentsOpen(!isEquipmentsOpen);
  };
  return (
    <div className="collapse-section">
      <button className="collapse-button">
        {title}
        <FontAwesomeIcon
          className="collapse-icon"
          icon={isEquipmentsOpen ? faAngleUp : faAngleDown}
          onClick={() => toggleEquipments()}
        />
      </button>
      {isEquipmentsOpen && (
        <div className="collapse-content">
          <ul>
            {Array.isArray(text) ? (
              text.map((textList) => <li key={Math.random()}>{textList}</li>)
            ) : (
              <p>{text}</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
