import React, { useState, useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import AddProductButton from "../../components/AddProductButton/AddProductButton";
import { Grid } from "semantic-ui-react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch("/api/products", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <AddProductButton />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 750 }}>
          <ProductList products={products} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
