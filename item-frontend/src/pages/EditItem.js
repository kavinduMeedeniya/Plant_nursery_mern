import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import { getItemById } from "../services/api";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await getItemById(id);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchItem();
  }, [id]);

  const handleSuccess = () => {
    navigate("/");
  };

  return (
    <div>
      {item ? <ItemForm item={item} onSuccess={handleSuccess} /> : <p>Loading...</p>}
    </div>
  );
};

export default EditItem;