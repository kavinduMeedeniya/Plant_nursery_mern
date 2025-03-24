import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemById } from "../services/api";
import "../styles/ItemDetails.css";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = async () => {
      try {
        const data = await fetchItemById(id);
        setItem(data);
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };
    getItem();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!item) return <p>Item not found.</p>;

  return (
    <div className="item-details">
      <img
        src={`http://localhost:8000/uploads/${item.image}`}
        alt={item.name}
        onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
      />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p><strong>Price:</strong> {item.price}</p>
      <p><strong>Stock:</strong> {item.stock}</p>
      <button onClick={() => alert(`${item.name} added to cart!`)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemDetails;