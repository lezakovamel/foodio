import { useState, useEffect } from "react";
import axios from "axios";
export function useGetData() {
  const url = "https://exercise.cngroup.dk/api/recipes";
  const [recipeData, setRecipeData] = useState({
    cards: [],
    isLoading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setRecipeData({ ...recipeData, isLoading: true });
        const result = await axios(url);
        const data = result.data;
        setRecipeData({ cards: data, isLoading: false });
      } catch ({ message }) {
        setRecipeData({ ...recipeData, isLoading: false, error: message });
      }
    };
    fetchData();
  }, []);
  return recipeData;
}
