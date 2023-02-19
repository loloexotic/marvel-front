import React from "react";
import Characters from "./Characters";
Characters;

function Favoris() {
  const handlefavorite = (Characters) => {
    // vérifie si l'élément est stocké dans le local storage
    if (localStorage.getItem(`${caracter.name}`)) {
      // Si c'est le cas, affiche un accueil personnalisé
      handlefavorite() = localStorage.getItem("");
    } else {
      <Link to="/" />;
    }
  };

  return <div>Favoris</div>;
}

export default Favoris;
