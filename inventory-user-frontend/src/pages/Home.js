import React from "react";
import ItemList from "../components/ItemList";
import Itemcontent from "../components/Itemcontent";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Itemcontent />
      <ItemList />
      <Footer />
    </div>
  );
};

export default Home;