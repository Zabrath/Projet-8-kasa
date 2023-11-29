import logo from "../../images/logoKasa.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logoKasa" />
      <nav className="header__nav">
        <p>Accueil</p>
        <p>A propos</p>
      </nav>
    </header>
  );
}

export default Header;
