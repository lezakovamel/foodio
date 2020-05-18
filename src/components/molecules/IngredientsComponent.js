import React from "react";
import { ModalTypeEnum } from "../../tools/Enums";
import { useState } from "react";
import { Grid } from "../atoms/Grid";

const IngredientsComponent = ({ data }) => {
  const [ingredients, setIngredients] = useState(data.ingredients);

  const renderIngre = () =>
    ingredients && ingredients.map((ingre) => <div>{ingre.name}</div>);


    console.log(data);
    console.log(ingredients);
    
  //---------- VIEWS ----------

  const add = () => {
    return <div>ADD</div>;
  };
  const edit = () => {
    return <Grid>{renderIngre()}</Grid>;
  };

  return data.type === ModalTypeEnum.ADD_FOOD ? add() : edit();
};

export default IngredientsComponent;
