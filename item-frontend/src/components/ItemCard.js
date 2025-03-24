import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { increaseStock, decreaseStock, deleteItem } from "../services/api";

const ItemCard = ({ item, onUpdate }) => {
  const handleStockChange = async (action, quantity) => {
    try {
      if (action === "increase") {
        await increaseStock(item._id, quantity);
      } else {
        await decreaseStock(item._id, quantity);
      }
      onUpdate();
    } catch (error) {
      console.error("Error updating stock:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteItem(item._id);
      onUpdate();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <Card sx={{ 
      maxWidth: 250,
      m: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {item.image && (
        <CardMedia
          component="img"
          height="200" 
          image={`http://localhost:8000/uploads/${item.image}`}
          alt={item.name}
          sx={{
            filter: "brightness(80%)",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.6)",
            borderRadius: "8px",
            objectFit: 'cover'
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, p: 1.5 }}> {/* Reduced padding */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: "bold",
            fontSize: "1rem",
            lineHeight: 1.2
          }} 
          className="tharu"
        >
          {item.name}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            fontFamily: "Trebuchet MS", 
            fontWeight: "normal", 
            fontSize: "0.8rem",
            mb: 1
          }}
        >
          {item.description}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: "normal", 
            fontSize: "0.85rem"
          }}
        >
          Price: Rs {item.price}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: "normal", 
            fontSize: "0.85rem"
          }}
        >
          Stock: {item.stock}
        </Typography>
        <Box sx={{ 
          mt: 1,
          display: "flex",
          justifyContent: "center",
          flexWrap: 'wrap',
          gap: 0.5 
        }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleStockChange("increase", 1)}
            sx={{ 
              fontSize: "0.7rem",
              py: 0.5,
              px: 1
            }}
            className="buttonIncrease"
          >
            Increase
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleStockChange("decrease", 1)}
            sx={{ 
              fontSize: "0.7rem",
              py: 0.5,
              px: 1,
              background: "red"
            }}
            className="buttonDecrease"
          >
            Decrease
          </Button>
        </Box>
        <Box sx={{ 
          mt: 1, // Reduced from 2
          display: "flex",
          justifyContent: "center",
          flexWrap: 'wrap',
          gap: 0.5
        }}>
          <Button
            component={Link}
            to={`/edit/${item._id}`}
            variant="outlined"
            color="primary"
            sx={{ 
              fontSize: "0.7rem",
              py: 0.5,
              px: 1,
              fontWeight: "bold",
              color: "green",
              borderColor: "green"
            }}
            className="buttonEdit"
          >
            Edit
          </Button>
          <Button
            component={Link}
            to={`/item/${item._id}`}
            variant="outlined"
            color="info"
            sx={{ 
              fontSize: "0.7rem",
              py: 0.5,
              px: 1,
              fontWeight: "bold",
              color: "green",
              borderColor: "green"
            }}
            className="buttonView"
          >
            View
          </Button>
          <Button 
            variant="outlined" 
            color="error" 
            onClick={handleDelete}
            sx={{ 
              fontSize: "0.7rem",
              py: 0.5,
              px: 1,
              fontWeight: "bold",
              color: "red",
              borderColor: "red"
            }}
            className="buttonDelete"
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemCard;