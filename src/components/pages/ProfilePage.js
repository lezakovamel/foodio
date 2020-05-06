import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Control";
import BaseTemplate from "../templates/BaseTemplate";
import { PageTypeEnum } from "../../tools/Enums";
import CardSection from "../organisms/CardSection";
import Loading from "../atoms/Loading/Loading";
import { useFavourites } from "../../hooks/Favourite";
import NotFoundText from "../molecules/NotFoundText";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const favourites = useFavourites(user, setLoading, setError);
  const fullName = user.name !== "" ? `${user.name} ${user.surname}` : null;

  return (
    <BaseTemplate
      title={fullName !== null ? fullName : ""}
      pageType={PageTypeEnum.PROFILE}
    >
      {!error ? (
        <div>
          {!loading ? (
            <CardSection title="Favourite foods" data={favourites} />
          ) : (
            <Loading />
          )}
        </div>
      ) : (
        <NotFoundText />
      )}
    </BaseTemplate>
  );
};

export default ProfilePage;
