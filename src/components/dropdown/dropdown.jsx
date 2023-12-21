import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./dropdown.scss";

// création du composant dropdown avec titre et texte en props a rmeplir dans la page qui intègre le composant

function Dropdown({ title, text }) {
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);
  const [classActive, setClassActive] = useState("");

  const toggleEquipments = () => {
    if (!isEquipmentsOpen) {
      setClassActive("open");
    } else {
      setClassActive("");
    }
    setIsEquipmentsOpen(!isEquipmentsOpen);
  };

  return (
    <div className={`dropdownSection ${classActive}`}>
      <button className="dropdownSection__button">
        {title}
        <FontAwesomeIcon
          className="dropdownSection__icon"
          icon={faAngleDown}
          onClick={() => toggleEquipments()}
        />
      </button>

      <div className="dropdownSection__content">
        <ul>
          {Array.isArray(text) ? (
            text.map((textList) => <li key={Math.random()}>{textList}</li>)
          ) : (
            <p>{text}</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
