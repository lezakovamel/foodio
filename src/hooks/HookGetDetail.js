import { useState, useEffect } from "react";

import axios from "axios";

export function useGetData(slug) {
  const url = `https://exercise.cngroup.dk/api/recipes/${slug}`;
  const [recipeData, setRecipeData] = useState({});

  useEffect(() => {
    axios(url)
      .then((response) => {
        console.log(response.data);
        setRecipeData({ ...response.data });
        console.log(recipeData);
      })
      .catch((error) => {});

  }, []);

  return recipeData;
}
