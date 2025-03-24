import axios from "axios";

const API_URL = "http://localhost:8000/api"; // Adjust based on your backend URL

export const fetchItems = async () => {
  const response = await axios.get(`${API_URL}/items`);
  return response.data;
};

export const fetchItemById = async (id) => {
  const response = await axios.get(`${API_URL}/item/${id}`);
  return response.data;
};