import React, { useState, useContext } from "react";

import BaseTemplate from "../templates/BaseTemplate";
import FoodModal from "../templates/FoodModal/FoodModal";
import FoodDetail from "../templates/FoodDetail";
import { ModalTypeEnum, PageTypeEnum } from "../../tools/Enums";
import { UserContext } from "../../Control";
import { useParams } from "react-router";
import firebase from "../../Firebase";
import Loading from "../atoms/Loading/Loading";
import {useGetData} from "../../hooks/HookGetDetail";

const FoodDetailPage = () => {
  const { user, userId } = useContext(UserContext);
  const { slug } = useParams();

  console.log(`Slug ${slug}`);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalType, setModalType] = useState(ModalTypeEnum.ADD_FOOD);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

const volani = useGetData(slug);

  const openModal = (type, message) => {
    setModalType(type);
    setModalVisibility(true);
    setMessage(message);
  };
  const closeEdit = (type) => setModalVisibility(false);

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
      setMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <BaseTemplate title="title" pageType={PageTypeEnum.DETAIL}>
      <FoodModal
        visibility={modalVisibility}
        type={modalType}
        closeEdit={closeEdit}
        message={message}
      />
      {loading ? (
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
