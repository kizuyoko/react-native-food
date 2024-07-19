import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFovorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealId] =useState([]);

  function addFovorite(id) {
    setFavoriteMealId((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealId((currentFavIds) => currentFavIds.filter((mealId) => {mealId !== id}));
  }

  const value = {
    ids: favoriteMealIds,
    addFovorite: addFovorite,
    removeFavorite: removeFavorite
  }

  return (
    <FavoritesContext.Provider
      value={value}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;