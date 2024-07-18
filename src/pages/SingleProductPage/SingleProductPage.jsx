import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditButton from '../../components/EditButton/EditButton';
import { Image, Grid } from "semantic-ui-react";

export default function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  // C(R)UD
  async function getProduct() {
    try {
      // Fetch product without requiring authentication
      const response = await fetch(`/api/products/${productId}`, {
        method: "GET",
      });

      const data = await response.json();
      // AFTER THIS WE HAVE THE DATA BACK FROM SERVER
      // CHECK THE DATA then update state!
      console.log(data);

      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // This useEffect is called when the page loads
    // Don't forget to call the function
    getProduct();
  }, [productId]);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 750 }}>
          {product && (
            <>
              <h2>{product.name}</h2>
              <Image src={product.imageUrl} alt={product.name} />
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              <EditButton productId={productId} />
            </>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
