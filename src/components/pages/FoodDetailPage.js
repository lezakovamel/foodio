import React, { useState, useEffect, useContext } from "react";

import axios from "axios";

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

  const { id } = useParams();
  const [modalData, setModalData] = useState({
    type: ModalTypeEnum.ADD_FOOD,
    visibility: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const volani = useGetData(slug);
  useGetIngredients();

  const openModal = (type, message) => {
    setModalData({ type: type, visibility: true, message: message });
  };
  const onModalClose = (type) => setModalData({ visibility: false });

  const onFavouriteClicked = () => {
    user.name !== ""
      ? addFoodToFavourite()
      : openModal(
          ModalTypeEnum.NOT_LOGGED,
          "Please, log in for saving your favourite foods."
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
    <BaseTemplate title="_food_name_" pageType={PageTypeEnum.DETAIL}>
      <FoodModal data={modalData} onClose={onModalClose} />
      {!loading ? (
        <FoodDetail
          key={volani.slug}
          title={volani.title}
          prepTime={volani.prepTime}
          slug={volani.slug}
          lastModifiedDate={volani.lastModifiedDate}
          openModal={openModal}
          onFavouriteClicked={onFavouriteClicked}
        />
      ) : (
        <Loading />
      )}
    </BaseTemplate>
  );
};

export default FoodDetailPage;
