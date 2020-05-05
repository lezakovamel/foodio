import React, { useState } from "react";
import { Formik } from "formik";
import { FormWrapper } from "../atoms/FormWrapper";
import { Input } from "../atoms/FormFields";
import { Button } from "../atoms/Buttons";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Formik
      initialValues={{
        email: email,
        password: password,
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <Input name="email" type="email" value={email} setValue={setEmail} />
            <Input name="password" type="password" value={password} setValue={setPassword} />
            <Button onClick={() => onLogin(email, password)}>LOGIN</Button>
          </FormWrapper>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
