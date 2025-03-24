import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { createItem, updateItem } from "../services/api";
import bg01 from "../backgroundImages/back01.jpg"

const ItemForm = ({ item, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || "",
        description: item.description || "",
        price: item.price || "",
        image: null,
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      if (item) {
        await updateItem(item._id, data);
      } else {
        await createItem(data);
      }
      onSuccess();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        backgroundImage:`url(${bg01})`,
        backgroundSize:"cover",
        justifyContent: 'center',
        alignItems: 'center',
        p: 2, // Padding around the form
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 500, // Maximum width of the form
          bgcolor: 'background.paper',
          p: 3, // Internal padding
          borderRadius: 2,
          boxShadow: 3, // Optional: adds a subtle shadow
        }}
      >
        <Typography 
          variant="h5" 
          align="center" 
          gutterBottom
        >
          {item ? "Edit Item" : "Add Item"}
        </Typography>
        
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          variant="outlined"
        />
        
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          variant="outlined"
          multiline
          rows={3}
        />
        
        <TextField
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          variant="outlined"
          type="number"
          inputProps={{ step: "0.01" }}
        />
        
        <Box sx={{ my: 2 }}>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            style={{ 
              display: 'block',
              width: '100%'
            }}
          />
        </Box>
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2,backgroundColor:"green" }}
        >
          {item ? "Update" : "Create"}
        </Button>
      </Box>
    </Box>
  );
};

export default ItemForm;