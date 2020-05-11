import React, { useState, useContext } from "react";

import BaseTemplate from "../templates/BaseTemplate";
import FoodModal from "../templates/FoodModal/FoodModal";
import FoodDetail from "../templates/FoodDetail";
import { ModalTypeEnum, PageTypeEnum } from "../../tools/Enums";
import { UserContext } from "../../Control";
import { useParams } from "react-router";
import firebase from "../../Firebase";
import Loading from "../atoms/Loading/Loading";
import { useGetData } from "../../hooks/HookGetDetail";
import { useGetIngredients } from "../../hooks/HookGetIngredients";

const FoodDetailPage = () => {
  const { user, userId } = useContext(UserContext);

  const { slug } = useParams();

  const [modalData, setModalData] = useState({
    type: ModalTypeEnum.ADD_FOOD,
    visibility: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  //Data se v hooku nesetnou je pouzit mock json
  const recipeData = useGetData(slug);

  useGetIngredients();

  const openModal = (type, message, payload) => {
    setModalData({
      type: type,
      visibility: true,
      message: message,
      payload: payload,
    });
  };
  const onModalClose = (type) => setModalData({ visibility: false });

  const onFavouriteClicked = () => {
    user.name !== ""
      ? addFoodToFavourite()
      : openModal(
          ModalTypeEnum.NOT_LOGGED,
          "Please, log in for saving your favourite foods.",
          recipeData
        );
  };

  const addFoodToFavourite = async () => {
    setLoading(true);
    try {
      await firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .update({
          favourite: firebase.firestore.FieldValue.arrayUnion("__food_id__"),
        });
      openModal(ModalTypeEnum.FAV_ADDED, "Food was added to favourites!");
      setLoading(false);
    } catch (error) {
      setModalData({ message: error.message });
      setLoading(false);
    }
  };

  return (
    <BaseTemplate title={recipeData.title} pageType={PageTypeEnum.DETAIL}>
      <FoodModal data={modalData} onClose={onModalClose} />
      {!loading ? (
        <>
          <FoodDetail
            key={recipeData.slug}
            title={recipeData.title}
            preparationTime={recipeData.preparationTime}
            ingredients={recipeData.ingredients}
            slug={recipeData.slug}
            directions={recipeData.directions}
            lastModifiedDate={recipeData.lastModifiedDate}
            openModal={openModal}
            onFavouriteClicked={onFavouriteClicked}
          />
        </>
      ) : (
        <Loading />
      )}
    </BaseTemplate>
  );
};

export default FoodDetailPage;
