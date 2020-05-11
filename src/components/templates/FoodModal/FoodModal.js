import React, { useState } from "react";

import { Modal } from "react-bootstrap";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./FoodModal.scss";

import FoodForm from "../../organisms/FoodForm";
import { H1 } from "../../atoms/Headlines";
import { Icon } from "../../atoms/Icon";
import { ModalTypeEnum } from "../../../tools/Enums";
import { P } from "../../atoms/TextFields";
import CardSection from "../../organisms/CardSection";
import SearchBar from "../../molecules/SearchBar";

const FoodModal = ({ data, onClose }) => {
  const [foodData, setFoodData] = useState();
  const [search, setsearch] = useState("");

  const title = () => {
    switch (data.type) {
      case ModalTypeEnum.ADD_FOOD:
        return "Add food";
      case ModalTypeEnum.EDIT_FOOD:
        return "__food_name__";
      case ModalTypeEnum.NOT_LOGGED:
        return "Error";
      case ModalTypeEnum.FAV_ADDED:
        return "Yuch";
      case ModalTypeEnum.SEARCH:
        return "Search foods";
      default:
        break;
    }
  };
  const body = () => {
    switch (data.type) {
      case ModalTypeEnum.ADD_FOOD:
        return <FoodForm type={data.type} />;
      case ModalTypeEnum.EDIT_FOOD:
        return <FoodForm type={data.type} data={data.payload} />;
      case ModalTypeEnum.NOT_LOGGED:
        return <P>{data.message}</P>;
      case ModalTypeEnum.FAV_ADDED:
        return <P>{data.message}</P>;
      case ModalTypeEnum.SEARCH:
        return (
          <div>
            <SearchBar
              search={search}
              setSearch={setsearch}
              onSearchChange={onSearchChanged}
            />
            <CardSection data={foodData} />
          </div>
        );
      default:
        break;
    }
  };

  const onSearchChanged = (query) => {
    const arr = data.payload;
    const filteredArr = arr.filter(
      (food) => food.title.toLowerCase().length < 3
    );
    console.log(arr);

    // setFilteredData(data.cards.filter((val) => val.title.includes(query)));
    console.log(query);
  };
  return (
    <Modal
      show={data.visibility}
      onHide={onClose}
      dialogClassName="modalWindow"
    >
      <Modal.Header>
        <H1>{title()}</H1>
        <Icon icon={faTimes} onClick={onClose} />
      </Modal.Header>
      <Modal.Body>
        {data.type === ModalTypeEnum.ADD_FOOD ||
        data.type === ModalTypeEnum.EDIT_FOOD ? (
          <FoodForm
            type={data.type}
            //ingredients={ingredients}
          />
        ) : (
          <P>{data.message}</P>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default FoodModal;
