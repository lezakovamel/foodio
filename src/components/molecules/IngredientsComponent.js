import React, { useRef, useEffect } from "react";
import { ModalTypeEnum } from "../../tools/Enums";
import { useState } from "react";
import { Grid } from "../atoms/Grid";
import IngredientField from "./IngredientField";
import Container from "../atoms/Container";
import { H3 } from "../atoms/Headlines";
import { Icon } from "../atoms/Icon";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";

const IngredientsComponent = ({ type, data }) => {
  const [ingredients, setIngredients] = useState(data.ingredients);
  const [visibility, setVisibility] = useState(false);

  const onOpenIngre = () => {
    setVisibility(!visibility);
  };

  console.log(ingredients);

  const renderIngre = () =>
    ingredients &&
    ingredients.map((ingre) => <IngredientField ingredient={ingre} />);

  //---------- VIEWS ----------

  const add = () => {
    return <Grid>ADD</Grid>;
  };
  const edit = () => {
    return <Grid>{renderIngre()}</Grid>;
  };

  return (
    <Container>
      <H3>
        {type === ModalTypeEnum.ADD_FOOD
          ? "ADD INGREDIENTS"
          : "EDIT INGREDIENTS"}
        <Icon icon={faLevelDownAlt} onClick={onOpenIngre} />
      </H3>
      {visibility ? (
        <div>{type === ModalTypeEnum.ADD_FOOD ? add() : edit()}</div>
      ) : (
        <div />
      )}
    </Container>
  );
};

export default IngredientsComponent;
