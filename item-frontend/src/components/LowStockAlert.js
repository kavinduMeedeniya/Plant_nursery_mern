import React, { useState, useEffect } from "react";
import bg03 from "../backgroundImages/back03.jpg";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import { checkLowStock } from "../services/api";
import WarningAmberIcon from "@mui/icons-material/WarningAmber"; // Optional icon for visual appeal

const LowStockAlert = () => {
  const [lowStockItems, setLowStockItems] = useState([]);

  useEffect(() => {
    const fetchLowStock = async () => {
      try {
        const response = await checkLowStock();
        setLowStockItems(response.data.items || []);
      } catch (error) {
        console.error("Error fetching low stock items:", error);
      }
    };
    fetchLowStock();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:`url(${bg03})`,
        backgroundSize:"cover",
        bgcolor: "#f5f5f5", // Light gray background for the page
        p: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 600,
          width: "100%",
          p: 3,
          borderRadius: 3,
          bgcolor: "white",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)", // Subtle lift on hover
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <WarningAmberIcon
            sx={{ color: "#ff9800", mr: 1, fontSize: 30 }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Low Stock Alerts
          </Typography>
        </Box>

        <Divider sx={{ mb: 2, bgcolor: "#e0e0e0" }} />

        {lowStockItems.length === 0 ? (
          <Typography
            variant="body1"
            sx={{
              color: "#4caf50", // Green for positive message
              textAlign: "center",
              py: 2,
              fontStyle: "italic",
            }}
          >
            All items are well-stocked! 🎉
          </Typography>
        ) : (
          <List sx={{ maxHeight: 400, overflow: "auto" }}>
            {lowStockItems.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  bgcolor: item.stock <= 5 ? "#ffebee" : "#fff3e0", // Reddish for very low, orange for low
                  transition: "background-color 0.2s",
                  "&:hover": {
                    bgcolor: "#e0e0e0", // Gray hover effect
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "medium", color: "#424242" }}
                    >
                      {item.name}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="body2"
                      sx={{
                        color: item.stock <= 5 ? "#d32f2f" : "#f57c00", // Red for critical, orange for warning
                      }}
                    >
                      Stock: {item.stock}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
};

export default LowStockAlert;