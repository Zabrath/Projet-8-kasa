import React from "react";
import "./home.scss";
import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";
import logements from "../../data/data.json";
import imageBackground from "../../images/imageAccueil.png";

function Home() {
  return (
    <main>
      <Banner
        image={imageBackground}
        text={"Chez vous, partout et ailleurs"}
        key={"bannerHome"}
      />
      <div className="container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </main>
  );
}

export default Home;
