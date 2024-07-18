import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditProductForm from '../../components/EditProductForm/EditProductForm';

export default function EditPage() {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    getProductInfo();
  }, []);

  async function getProductInfo() {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }

      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function handleEditProduct(productInfo) {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'PUT',
        body: JSON.stringify(productInfo),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const data = await response.json();
      setProduct(data.product);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <h2>Edit a product</h2>
      {product && <EditProductForm product={product} handleEditProduct={handleEditProduct} />}
    </div>
  );
}
