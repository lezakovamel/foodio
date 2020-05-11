import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
export function useGetData() {
  const { slug: boa } = useParams();
  const url = `https://exercise.cngroup.dk/api/recipes/${boa}`;
  const [recipeData, setRecipeData] = useState({});
  // BETR WEJ
   const fetchData = async () => {
     try {
       const { data } = await axios(url);
       setRecipeData(data);
     } catch (error) {
       console.log("error", error);
     }
   };
   useEffect(() => {
     fetchData();
   }, []);
  return recipeData;
}