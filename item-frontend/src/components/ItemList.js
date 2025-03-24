import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";
import { getAllItems } from "../services/api";

const ItemList = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await getAllItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Grid 
      container 
      spacing={1} // Reduced spacing from 2 to 1
      sx={{ 
        p: 2, // Reduced padding from 3 to 2
        justifyContent: 'center'
      }}
    >
      {items.map((item) => (
        <Grid 
          item 
          xs={12} // Full width on extra small screens
          sm={6}  // 2 per row on small screens
          md={4}  // 3 per row on medium screens
          lg={3}  // 4 per row on large screens
          xl={2.4} // 5 per row on extra large screens
          key={item._id}
        >
          <ItemCard item={item} onUpdate={fetchItems} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;