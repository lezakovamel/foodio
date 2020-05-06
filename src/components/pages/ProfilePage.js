import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Control";
import BaseTemplate from "../templates/BaseTemplate";
import { PageTypeEnum } from "../../tools/Enums";
import CardSection from "../organisms/CardSection";
import Loading from "../atoms/Loading/Loading";
import { useFavourites } from "../../hooks/HookFavourites";
import NotFoundText from "../molecules/NotFoundText";
import firebase from "../../Firebase";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  let favourites = useFavourites(user, setLoading, setError);

  const fullName = user.name !== "" ? `${user.name} ${user.surname}` : null;

  const onRemoveFromFavourites = (foodId) => {
    setLoading(true);
    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .update({
        favourite: firebase.firestore.FieldValue.arrayRemove(foodId),
      })
      .then((value) => {
        user.favourite = user.favourite.filter((value) => value != foodId);
        console.log(user.favourite);
        favourites = favourites.filter((value) =>
          user.favourite.includes(value._id)
        );
        setLoading(false);
      });
  };

  return (
    <BaseTemplate
      title={fullName !== null ? fullName : ""}
      pageType={PageTypeEnum.PROFILE}
    >
      {!error ? (
        <div>
          {!loading ? (
            <CardSection
              title="Favourite foods"
              data={favourites}
              isProfile={true}
              onIconClick={onRemoveFromFavourites}
            />
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
