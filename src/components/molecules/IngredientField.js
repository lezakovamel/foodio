import React, { useState } from "react";
import Container from "../atoms/Container";
import { Input } from "../atoms/FormFields";

const IngredientField = ({ ingredient }) => {
  const [name, setName] = useState(ingredient.name);
  const [amount, setAmount] = useState(ingredient.amount);
  const [amountUnit, setAmountUnit] = useState(ingredient.amountUnit);

  return (
    <Container>
      <Input type="text" setValue={setName} value={name} name="name" />
      <Input type="number" setValue={setAmount} value={amount} name="amount" />
      <Input
        type="text"
        setValue={setAmountUnit}
        value={amountUnit}
        name="amountUnit"
      />
    </Container>
  );
};

export default IngredientField;
