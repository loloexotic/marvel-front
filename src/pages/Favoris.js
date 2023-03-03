import React from "react";
import Characters from "./Characters";
Characters;
// peut etre stocké l'info convertir en string  
function Favoris() {
  const handlefavorite = (Characters) => {
    // vérifie si l'élément est stocké dans le local storage
    if (localStorage.getItem(`${character._id}`)) {
      // Si c'est le cas, affiche un accueil personnalisé
      handlefavorite() = localStorage.getItem("");
    } else {
      <Link to="/" />;
    }
  };

  return <div>Favoris</div>;
}

export default Favoris;
