import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logoKasa.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logoKasa" />
      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/propos">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
