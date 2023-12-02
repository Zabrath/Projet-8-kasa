import "./error.scss";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <p className="error__titleBis">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink className="error__accueil" to="/">
        Retourner sur la page d'accueil
      </NavLink>
    </main>
  );
}

export default Error;
