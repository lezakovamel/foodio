import React, { useContext } from "react";
import { UserContext } from "../../Control";
import BaseTemplate from "../templates/BaseTemplate";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  return <BaseTemplate title={`${user.name} ${user.surname}`}></BaseTemplate>;
};

export default ProfilePage;
