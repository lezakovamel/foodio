import React, { useState } from "react";

import { Formik } from "formik";
import styled from "@emotion/styled";

import { FormWrapper } from "../atoms/FormWrapper";
import { Input } from "../atoms/FormFields";
import { Button } from "../atoms/Buttons";
import Loading from "../atoms/Loading/Loading";
import { SizedBox } from "../atoms/SizedBox";
import { ErrorBox } from "../atoms/ErrorBox";

const LoginWrapper = styled.div`
  min-height: 80vh;
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const LoginForm = ({ onLogin, loading, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return !loading ? (
    <LoginWrapper>
      <Formik
        initialValues={{
          email: email,
          password: password,
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <Input
                name="email"
                type="email"
                value={email}
                setValue={setEmail}
              />
              <Input
                name="password"
                type="password"
                value={password}
                setValue={setPassword}
              />
              <SizedBox />
              {error !== "" ? <ErrorBox error={error} /> : <div />}
              <Button onClick={() => onLogin(email, password)}>LOGIN</Button>
            </FormWrapper>
          </form>
        )}
      </Formik>
    </LoginWrapper>
  ) : (
    <LoginWrapper>
      <Loading />
    </LoginWrapper>
  );
};

export default LoginForm;
