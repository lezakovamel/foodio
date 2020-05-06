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

  console.log(favourites);

  return favourites;
}
