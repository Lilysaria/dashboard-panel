import { useState } from 'react';
import React from "react";
import AddProductForm from "../../components/AddProductForm/AddProductForm";

export default function CreateProductPage() {
  const [products, setProducts] = useState([]);

  async function handleAddProduct(productInfo) {
    console.log(productInfo, " formData from addPost form");

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(productInfo),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      console.log(data, ' response from post request! This from express');
      setProducts([data.products, ...products]);
    } catch (err) {
      console.log(err.message);
      console.log('CHECK YOUR SERVER TERMINAL!!!!');
    }
  }

  return (
    <div>
      <h2>Create a new product</h2>
      <AddProductForm handleAddProduct={handleAddProduct} />
    </div>
  );
}
