import { Link } from "react-router-dom";
import logo from "../../images/logoKasa.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logoKasa" />
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/propos">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
