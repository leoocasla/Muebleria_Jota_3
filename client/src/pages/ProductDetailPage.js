import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import ContactForm from '../components/ContactForm/ContactForm';

const ProductDetailPage = ({ onAddToCart }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${apiUrl}/api/productos/${id}`);
        if (!response.ok) {
          throw new Error('Producto no encontrado');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, apiUrl]);

  const handleDelete = async () => {
    if (!window.confirm(`¿Estás seguro de que quieres eliminar "${product.nombre}"?`)) {
      return;
    }
    try {
      const response = await fetch(`${apiUrl}/api/productos/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('No se pudo eliminar el producto');
      }
      alert('Producto eliminado exitosamente');
      navigate('/productos');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAddToCartClick = () => {
    onAddToCart(product);
    alert(`${product.nombre} añadido al carrito!`);
  };

  if (loading) return <h2 className="section-title">Cargando producto...</h2>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <>
      <button onClick={() => navigate('/productos')} className="back-button">
        ← Volver al catálogo
      </button>

      <ProductDetail 
        product={product} 
        onDelete={handleDelete}
        onAddToCart={handleAddToCartClick}
      />

      <ContactForm />
    </>
  );
};

export default ProductDetailPage;