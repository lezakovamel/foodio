import React, { useContext, useState } from "react";

import BaseTemplate from "../templates/BaseTemplate";
import LoginForm from "../organisms/LoginForm";
import firebase from "../../Firebase";
import { UserContext } from "../../Control";
import { useHistory } from "react-router";
import { PageTypeEnum } from "../../tools/Enums";

const LoginPage = () => {
  const { setUser, setUserId } = useContext(UserContext);
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onLogin = async (email, pswd) => {
    setLoading(true);
    try {
      const { uid } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, pswd)
        .then((result) => result.user);

      const user = await firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          setUserId(doc.id);
          return doc.data();
        });

      if (user !== null) {
        setUser(user);
        setLoading(false);        
        push(`/profile`);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <BaseTemplate title="Login" pageType={PageTypeEnum.LOGIN}>
      <LoginForm onLogin={onLogin} loading={loading} error={error} />
    </BaseTemplate>
  );
};

export default LoginPage;
