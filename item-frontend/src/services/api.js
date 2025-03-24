import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const createItem = (formData) => API.post("/item", formData);
export const getAllItems = () => API.get("/items");
export const getItemById = (id) => API.get(`/item/${id}`);
export const updateItem = (id, formData) => API.put(`/update/item/${id}`, formData);
export const deleteItem = (id) => API.delete(`/delete/item/${id}`);
export const increaseStock = (id, quantity) => API.put(`/item/increase-stock/${id}`, { quantity });
export const decreaseStock = (id, quantity) => API.put(`/item/decrease-stock/${id}`, { quantity });
export const checkLowStock = () => API.get("/low-stock");
export const generateReport = () => API.get("/report", { responseType: "blob" });

export default API;