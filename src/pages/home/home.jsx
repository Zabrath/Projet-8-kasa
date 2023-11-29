import imageBackground from "../../images/imageAccueil.png";

function Home() {
  return (
    <div>
      <img className="image" src={imageBackground} alt="" />
      <p className="texteImageBackground">Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Home;
