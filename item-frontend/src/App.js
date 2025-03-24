import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import ItemDetails from "./pages/ItemDetails";
import LowStock from "./pages/LowStock";
import Reports from "./pages/Reports";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/low-stock" element={<LowStock />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
};

export default App;