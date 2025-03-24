import React from "react";
import ItemForm from "../components/ItemForm";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/");
  };

  return (
    <div>
      <ItemForm onSuccess={handleSuccess} />
    </div>
  );
};

export default AddItem;