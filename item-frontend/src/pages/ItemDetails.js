import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, CardMedia } from "@mui/material";
import { getItemById } from "../services/api";

const ItemDetails = () => {
  const { id } = useParams();
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

  if (!item) return <p>Loading...</p>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">{item.name}</Typography>
      {item.image && (
        <CardMedia
          component="img"
          height="300"
          image={`http://localhost:8000/uploads/${item.image}`}
          alt={item.name}
          sx={{ mt: 2 }}
        />
      )}
      <Typography variant="body1" sx={{ mt: 2 }}>
        Description: {item.description}
      </Typography>
      <Typography variant="body1">Price: ${item.price}</Typography>
      <Typography variant="body1">Stock: {item.stock}</Typography>
    </Box>
  );
};

export default ItemDetails;