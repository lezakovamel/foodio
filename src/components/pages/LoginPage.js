import React, { useContext } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import LoginForm from "../organisms/LoginForm";

import firebase from "../../Firebase";
import { UserContext } from "../../Control";
import { useHistory } from "react-router";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const { push } = useHistory();

  const onLogin = async (email, pswd) => {
    const { uid } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, pswd)
      .then((result) => result.user);

    const user = await firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((doc) => doc.data());

    if (user !== null) {
      setUser(user);
      push(`/profile`);
    }
  };

  return (
    <BaseTemplate title="Login">
      <LoginForm onLogin={onLogin} />
    </BaseTemplate>
  );
};

export default LoginPage;
