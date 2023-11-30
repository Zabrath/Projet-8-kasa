import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";
import logements from "../../data/data.json";
import FicheLogement from "../fichelogement/fichelogement";

function Home() {
  return (
    <main>
      <Banner />
      <div className="container">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/fichelogement/${logement.id}`}>
            <Card logement={logement} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
