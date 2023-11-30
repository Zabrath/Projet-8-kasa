import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Banner from "./components/banner/banner";
import Home from "./pages/home/home";
import FicheLogement from "./pages/fichelogement/fichelogement";
import Error from "./pages/error/error";
import { Routes, Route } from "react-router-dom";
import logements from "./data/data.json";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/fichelogement/:logementId"
          element={<FicheLogement logements={logements} />}
        />
        <Route path="/propos" element={<Banner />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
