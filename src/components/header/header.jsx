import "./header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../images/logoKasa.png";

function Header() {
  return (
    <header className="header">
      <NavLink className="header__logo" to="/">
        <img src={logo} alt="logoKasa" />
      </NavLink>
      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/propos">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
