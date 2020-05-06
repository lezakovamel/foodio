import React, { useContext } from "react";
import { UserContext } from "../../Control";
import BaseTemplate from "../templates/BaseTemplate";
import { PageTypeEnum } from "../../tools/Enums";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  return (
    <BaseTemplate
      title={`${user.name} ${user.surname}`}
      pageType={PageTypeEnum.PROFILE}
    ></BaseTemplate>
  );
};

export default ProfilePage;
