import React from "react";

import { faEdit, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

import styled from "@emotion/styled";
import { Icon } from "../atoms/Icon";
import { P } from "../atoms/TextFields";

const Actions = styled.div`
  margin-left: auto;
  margin-bottom: ${(props) => props.theme.padding.medium};
  top: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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

const FoodActions = ({
  openEdit,
  onFavouriteClicked,
  preparationTime,
  onDeleteClicked,
}) => (
  <Actions>
    <P>Preparation time: {preparationTime} min.</P>
    <IconBox>
      <Icon icon={faEdit} onClick={openEdit} />
      <Icon icon={faHeart} onClick={onFavouriteClicked} />
      <Icon icon={faTrash} onClick={onDeleteClicked} />
    </IconBox>
  </Actions>
);

export default FoodActions;
