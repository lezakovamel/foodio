import { useState, useEffect } from "react";

import axios from "axios";

export function useGetData(slug) {
  const url = `https://exercise.cngroup.dk/api/recipes/${slug}`;
  const [recipeData, setRecipeData] = useState({});

  useEffect(() => {
    axios(url)
      .then((response) => {
        setRecipeData({ ...response.data });
      })
      .catch((error) => {});
  }, []);

  return recipeData;
}
