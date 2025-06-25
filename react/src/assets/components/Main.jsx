import Card from "./Card";
import "./Main.css";
import React, { useState , useEffect} from 'react'
const Main = () => {
  const [productsList, setProductsList] = useState([]);
//   const [searchTerm, setSearchTerm] = useState([]);
  const fetchProducts = fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((res)=> setProductsList(res))
    
  return (
    <>
      <div className="container">
        {productsList.map((product)=><Card key={product.id} product={product}/>)}
        
      </div>
    </>
  );
};

export default Main;
