import React, { useContext, useState } from "react";
import { UserContext } from "../../Control";
import BaseTemplate from "../templates/BaseTemplate";
import { PageTypeEnum, ThemeTypeEnum } from "../../tools/Enums";
import CardSection from "../organisms/CardSection";
import Loading from "../atoms/Loading/Loading";
import { useFavourites } from "../../hooks/HookFavourites";
import NotFoundText from "../molecules/NotFoundText";
import firebase from "../../Firebase";
import ThemeSwitcher from "../molecules/ThemeSwitcher";
import Container from "../atoms/Container";

const ProfilePage = () => {
  const { user, userId } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  let favourites = useFavourites(setLoading, setError);

  const fullName = user.name !== "" ? `${user.name} ${user.surname}` : null;

  const onRemoveFromFavourites = (foodId) => {
    setLoading(true);
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .update({
        favourite: firebase.firestore.FieldValue.arrayRemove(foodId),
      })
      .then((_) => {
        user.favourite = user.favourite.filter((value) => value !== foodId);
        favourites = favourites.filter((value) =>
          user.favourite.includes(value._id)
        );
        setLoading(false);
      });
  };

  const onSwitchTheme = (wantedTheme) => {
    setLoading(true);

    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .update({
        theme:
          user.theme === ThemeTypeEnum["LIGHT"]
            ? ThemeTypeEnum.DARK
            : ThemeTypeEnum.LIGHT,
      })
      .then((_) => {
        user.theme = wantedTheme;
        setLoading(false);
      });
  };

  return (
    <BaseTemplate
      title={fullName !== null ? fullName : ""}
      pageType={PageTypeEnum.PROFILE}
    >
      {!error ? (
        <>
          {!loading ? (
            <>
              <ThemeSwitcher onSwitchTheme={onSwitchTheme} />
              <CardSection
                title="Favourite foods"
                data={favourites}
                isProfile={true}
                onIconClick={onRemoveFromFavourites}
              />
            </>
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <NotFoundText />
      )}
    </BaseTemplate>
  );
};

export default ProfilePage;
