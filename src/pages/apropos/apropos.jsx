import React from "react";
import Dropdown from "../../components/dropdown/dropdown";
import Banner from "../../components/banner/banner";
import "./apropos.scss";
import imageApropos from "../../images/imageApropos.png";

// page contenant le composant banner avec une image en props et les dropdown en props également mais texte brut

function Apropos() {
  return (
    <>
      <main>
        <Banner image={imageApropos} key={"imageBanner"} />
        <div className="dropdown">
          <Dropdown
            title={"Fiabilité"}
            text={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            }
            key={"Fiabilité"}
          />
          <Dropdown
            title={"Respect"}
            text={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
            }
            key={"Respect"}
          />
          <Dropdown
            title={"Service"}
            text={
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            }
            key={"Service"}
          />
          <Dropdown
            title={"Sécurité"}
            text={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
            key={"Sécurité"}
          />
        </div>
      </main>
    </>
  );
}

export default Apropos;
