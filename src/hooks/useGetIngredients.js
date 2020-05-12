import { useState, useEffect } from "react";
import axios from "axios";
export function useGetIngredients() {
  const url = "https://exercise.cngroup.dk/api/recipes/ingredients";
  const [ingredientsData, setIngredientsData] = useState({
    options: [],
    isLoading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIngredientsData({ ...ingredientsData, isLoading: true });
        const result = await axios(url);
        const data = result.data;
        setIngredientsData({ options: data, isLoading: false });
      } catch ({ message }) {
        setIngredientsData({
          ...ingredientsData,
          isLoading: false,
          error: message,
        });
      }
    };
    fetchData();
  }, []);

  return ingredientsData;
}
