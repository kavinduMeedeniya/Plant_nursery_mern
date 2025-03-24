import React from "react";
import { Link } from "react-router-dom";
import "../styles/ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <img
        src={`http://localhost:8000/uploads/${item.image}`} // Adjust based on your backend URL
        alt={item.name}
        onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback image
      />
      <h3>{item.name}</h3>
      <p>{item.description.substring(0, 50)}...</p>
      <div className="card-buttons">
        <Link to={`/item/${item._id}`}>
          <button>View</button>
        </Link>
        <button onClick={() => alert(`${item.name} added to cart!`)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;