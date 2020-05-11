import { useState, useEffect, useContext } from "react";

import axios from "axios";
import { UserContext } from "../Control";

export function useFavourites(setLoading, setError) {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(UserContext);

  const getFavourites = () =>
    axios
      .get(`https://exercise.cngroup.dk/api/recipes`)
      .then((response) => {
        setFavourites(
          response.data.filter((value) => user.favourite.includes(value._id))
        );
        setError(false);
        setLoading(false);
      })
      .catch((error) => setError(true));
  useEffect(() => {
    getFavourites();
  }, []);

  return favourites;
}
