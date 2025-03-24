import express from "express";
import { create, getAllItems, getItemById, update, deleteItem, upload,increaseStock,decreaseStock, checkLowStock } from "../controller/itemController.js";
import { generateReport } from "../reports/reportGenerator.js";

const route = express.Router();

route.post("/item", upload, create); // Image upload added
route.get("/items", getAllItems);
route.get("/item/:id", getItemById);
route.put("/update/item/:id", upload, update); // Image upload added
route.delete("/delete/item/:id", deleteItem);



route.put("/item/increase-stock/:id", increaseStock);
route.put("/item/decrease-stock/:id", decreaseStock);



route.get("/report", generateReport);
route.get("/low-stock", checkLowStock);


export default route;
