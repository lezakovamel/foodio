import React, { useRef, useEffect } from "react";
import { ModalTypeEnum } from "../../tools/Enums";
import { useState } from "react";
import { Grid } from "../atoms/Grid";
import IngredientField from "./IngredientField";
import Container from "../atoms/Container";
import { H3 } from "../atoms/Headlines";
import { Icon } from "../atoms/Icon";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import { useGetIngredients } from "../../hooks/useGetIngredients";

const IngredientsComponent = ({ type, data }) => {
  const [ingredients, setIngredients] = useState(data.ingredients);
  const [visibility, setVisibility] = useState(false);
  const [selected, setSelected] = useState("");

  const allIngredients = useGetIngredients().options;

  const onOpenIngre = () => {
    setVisibility(!visibility);
  };

  const renderIngre = () =>
    ingredients &&
    ingredients.map((ingre) => <IngredientField ingredient={ingre} />);

  const renderOptions = () =>
    allIngredients &&
    allIngredients.map((ingre) => <option value={ingre}>{ingre}</option>);

  //---------- VIEWS ----------

  const add = () => {
    return (
      <Grid>
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            setIngredients([...ingredients, e.target.value]);
            console.log(ingredients);
          }}
        >
          {renderOptions()}
        </select>
        {renderIngre()}
      </Grid>
    );
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
