// import React from "react";
// import { useLocation } from "react-router-dom";
// import "./banner.scss";
// import imageBackground from "../../images/imageAccueil.png";
// import imageApropos from "../../images/imageApropos.png";

// function Banner() {
//   const location = useLocation();
//   const isProposPage = location.pathname === "/propos";
//   const isAccueilPage = location.pathname === "/";

//   return (
//     <div className="banner">
//       <img
//         className="banner__image"
//         src={isProposPage ? imageApropos : imageBackground}
//         alt=""
//       />
//       {isAccueilPage && (
//         <p className="banner__texteImage">Chez vous, partout et ailleurs</p>
//       )}
//     </div>
//   );
// }

// export default Banner;

import React from "react";
import { useLocation } from "react-router-dom";
import "./banner.scss";
import imageBackground from "../../images/imageAccueil.png";
import imageApropos from "../../images/imageApropos.png";

const pageImages = {
  "/": imageBackground,
  "/propos": imageApropos,
};

const pageTexts = {
  "/": "Chez vous, partout et ailleurs",
};

function Banner() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div className="banner">
      <img className="banner__image" src={pageImages[currentPage]} alt="" />
      {pageTexts[currentPage] && (
        <p className="banner__texteImage">{pageTexts[currentPage]}</p>
      )}
    </div>
  );
}

export default Banner;
