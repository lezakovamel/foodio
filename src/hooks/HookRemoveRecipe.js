import { useEffect } from "react";

import { useHistory } from "react-router";

import axios from "axios";
import { useParams } from "react-router";

export function useGetData() {
  const { slug: boa } = useParams();
  const url = `https://exercise.cngroup.dk/api/recipes/${boa}`;
  const history = useHistory();
  const deleteData = async () => {
    try {
      await axios.delete(url);
      history.goBack();
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    deleteData();
  }, []);
}
