import React, { useState } from "react";

import BaseTemplate from "../templates/BaseTemplate";
import EditModal from "../templates/EditModal/EditModal";
import FoodDetail from "../templates/FoodDetail";

const FoodDetailPage = () => {
  const [editVisibility, setEditVisibility] = useState(false);

  console.log(editVisibility);

  const openEdit = () => setEditVisibility(true);
  const closeEdit = () => setEditVisibility(false);

  return (
    <BaseTemplate title="_food_name_">
      <EditModal visibility={editVisibility} closeEdit={closeEdit} />
      <FoodDetail openEdit={openEdit} />
    </BaseTemplate>
  );
};

export default FoodDetailPage;
