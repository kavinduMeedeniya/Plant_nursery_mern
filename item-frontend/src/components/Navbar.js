import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3E7B27' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Item Management
        </Typography>
        
        {/* Centered Navigation Links */}
        <Box sx={{ 
          display: 'flex', 
          flexGrow: 1, 
          justifyContent: 'center', 
          gap: 2 
        }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Add Item
          </Button>
          <Button color="inherit" component={Link} to="/low-stock">
            Low Stock
          </Button>
          <Button color="inherit" component={Link} to="/reports">
            Reports
          </Button>
        </Box>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
              width: 200,
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;