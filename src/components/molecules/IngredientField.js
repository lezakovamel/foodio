import React, { useState } from "react";
import Container from "../atoms/Container";
import { Input } from "../atoms/FormFields";

const IngredientField = ({ ingredient, onIngreChange }) => {
  const [name, setName] = useState(
    ingredient.name === undefined ? ingredient : ingredient.name
  );
  const [amount, setAmount] = useState(ingredient.amount);
  const [amountUnit, setAmountUnit] = useState(ingredient.amountUnit);

  return (
    <Container>
      <Input
        type="text"
        setValue={setName}
        value={name}
        name="name"
        onChange={(changed) => onIngreChange(changed, "name", ingredient._id)}
      />
      <Input
        type="number"
        setValue={setAmount}
        value={amount}
        name="amount"
        onChange={(changed) => onIngreChange(changed, "amount", ingredient._id)}
      />
      <Input
        type="text"
        setValue={setAmountUnit}
        value={amountUnit}
        name="amountUnit"
        onChange={(changed) =>
          onIngreChange(changed, "amountUnit", ingredient._id)
        }
      />
    </Container>
  );
};

export default IngredientField;
