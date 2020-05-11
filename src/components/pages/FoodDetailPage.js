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

import mock from '../../mock.json'

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
        //DOPLN V DETAIL KOMPONENTE TU TY FIELDY CO TADY PREDAVAS
        <FoodDetail
          key={mock.slug}
          title={mock.title}
          prepTime={mock.prepTime}
          slug={mock.slug}
          lastModifiedDate={mock.lastModifiedDate}
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
