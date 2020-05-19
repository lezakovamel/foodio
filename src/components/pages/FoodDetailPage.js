import React, { useState, useContext } from "react";

import BaseTemplate from "../templates/BaseTemplate";
import axios from "axios";
import FoodModal from "../templates/FoodModal/FoodModal";
import FoodDetail from "../templates/FoodDetail";
import { ModalTypeEnum, PageTypeEnum } from "../../tools/Enums";
import { UserContext } from "../../Control";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import firebase from "../../Firebase";
import Loading from "../atoms/Loading/Loading";
import { useGetData } from "../../hooks/useGetDetail";
import { useGetIngredients } from "../../hooks/useGetIngredients";

const FoodDetailPage = () => {
  const { user, userId } = useContext(UserContext);

  const { slug } = useParams();

  const [modalData, setModalData] = useState({
    type: ModalTypeEnum.ADD_FOOD,
    visibility: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const recipeData = useGetData(slug);
  const { push } = useHistory();

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
          favourite: firebase.firestore.FieldValue.arrayUnion(recipeData._id),
        });
      openModal(ModalTypeEnum.FAV_ADDED, "Food was added to favourites!");
      setLoading(false);
    } catch (error) {
      setModalData({ message: error.message });
      setLoading(false);
    }
  };
  const onEditClicked = () => {
    openModal(ModalTypeEnum.EDIT_FOOD, "", recipeData);
  };
  const onDeleteClicked = async () => {
    try {
      await axios.delete(
        `https://exercise.cngroup.dk/api/recipes/${recipeData._id}`
      );
      push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  const onEditSubmit = async (data) => {
    //TODO poslat data pres put na API
    /*
    try {
      await axios.put("https://exercise.cngroup.dk/api/recipes", data);
      push("/");
    } catch (error) {
      console.log("error", error);
    }*/
  };

  return (
    <BaseTemplate title={recipeData.title} pageType={PageTypeEnum.DETAIL}>
      <FoodModal
        data={modalData}
        onClose={onModalClose}
        onEditSave={onEditSubmit}
      />
      {!loading ? (
        <>
          <FoodDetail
            keyId={recipeData.slug}
            title={recipeData.title}
            preparationTime={recipeData.preparationTime}
            ingredients={recipeData.ingredients}
            slug={recipeData.slug}
            directions={recipeData.directions}
            lastModifiedDate={recipeData.lastModifiedDate}
            onEditClicked={onEditClicked}
            onFavouriteClicked={onFavouriteClicked}
            onDeleteClicked={onDeleteClicked}
          />
        </>
      ) : (
        <Loading />
      )}
    </BaseTemplate>
  );
};

export default FoodDetailPage;
