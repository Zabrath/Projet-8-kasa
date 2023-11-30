import "./banner.scss";
import imageBackground from "../../images/imageAccueil.png";

function Banner() {
  return (
    <div className="banner">
      <img className="banner__image" src={imageBackground} alt="" />
      <p className="banner__texteImage">Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
