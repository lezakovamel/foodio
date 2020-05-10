import React from "react";

import { faEdit, faHeart } from "@fortawesome/free-solid-svg-icons";

import styled from "@emotion/styled";
import { Icon } from "../atoms/Icon";
import { P } from "../atoms/TextFields";
import { ModalTypeEnum } from "../../tools/Enums";

const Actions = styled.div`
  width: 40vw;
  height: 7vh;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  box-sizing: border-box;
  padding: 10px 10px;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const FoodActions = ({ openEdit, onFavouriteClicked }) => (
  <Actions>
    <P>_prep_time_</P>
    <IconBox>
      <Icon icon={faEdit} onClick={() => openEdit(ModalTypeEnum.EDIT_FOOD)} />
      <Icon icon={faHeart} onClick={onFavouriteClicked} />
    </IconBox>
  </Actions>
);

export default FoodActions;
