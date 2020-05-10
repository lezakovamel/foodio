import { useState, useEffect } from "react";

import axios from "axios";


export function useFavourites(user, setLoading, setError) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const getFavourites = axios
      .get(`https://exercise.cngroup.dk/api/recipes`)
      .then((response) => {
        if (user.favourite !== undefined) {
          setFavourites(
            response.data.filter((value) => user.favourite.includes(value._id))
          );
          setLoading(false);
        } else {
          //Error on emptu user in profilePage
          setError(true);
        }
      });

    return () => getFavourites();
  }, []);

  return favourites;
}

export function useGetData() {
  const [recipeData, setRecipeData] = useState({
    cards: [],
    isLoading: true,
    error: "",
  });

  useEffect(async () => {
    try {
      setRecipeData({ ...recipeData, isLoading: true });

      const result= await axios(`https://exercise.cngroup.dk/api/recipes`);

      const data = result.data;


      setRecipeData({  cards: data, isLoading: false });


    } catch ({ message }) {
      setRecipeData({ ...recipeData, isLoading: false, error: message });
    }
  },[]);

  return recipeData;

}

