import logo from "../../images/LOGO.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="" />
      <p className="footer__texte">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
