import Card from "./Card";
import "./Main.css";
import React, { useState, useEffect } from "react";
const Main = () => {
  const [productsList, setProductsList] = useState([]);
  async function getProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setProductsList(data);
      console.log(data);
    } catch (err) {
      console.log("there is a problem", err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        {productsList.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Main;
