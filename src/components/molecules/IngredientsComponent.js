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
import { Select } from "../atoms/FormFields";

const IngredientsComponent = ({ type, ingredients, setIngredients }) => {
  const [visibility, setVisibility] = useState(false);
  const [selected, setSelected] = useState("");

  const allIngredients = useGetIngredients().options;

  const onOpenIngre = () => {
    setVisibility(!visibility);
  };

  const onIngreChange = (value, type, id) => {
    let index, editedIngre;
    index = ingredients.findIndex((obj) => obj._id === id);
    editedIngre = ingredients[index];
    switch (type) {
      case "name":
        editedIngre.name = value;
        break;
      case "amount":
        editedIngre.amount = value;
        break;
      case "amountUnit":
        editedIngre.amountUnit = value;
        break;
      default:
        break;
    }

    setIngredients([
      ...ingredients.slice(0, index),
      editedIngre,
      ...ingredients.slice(index + 1),
    ]);
  };

  const renderIngre = () =>
    ingredients &&
    ingredients.map((ingre) => (
      <IngredientField
        key={ingre._id}
        ingredient={ingre}
        onIngreChange={onIngreChange}
      />
    ));

  const renderOptions = () =>
    allIngredients &&
    allIngredients.map((ingre) => <option key={ingre} value={ingre}>{ingre}</option>);

  //---------- VIEWS ----------

  const add = () => {
    return (
      <>
        <Select
          name="Choose ingredients"
          options={renderOptions}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
        {renderIngre()}
      </>
    );
  };
  const edit = () => {
    return <>{renderIngre()}</>;
  };

  return (
    <>
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
    </>
  );
};

export default IngredientsComponent;
