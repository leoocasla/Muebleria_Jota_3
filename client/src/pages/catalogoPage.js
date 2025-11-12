import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList/ProductList';
import ContactForm from '../components/ContactForm/ContactForm';

const CatalogoPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${apiUrl}/api/productos`);
        if (!response.ok) {
          throw new Error('No se pudo conectar con el servidor.');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [apiUrl]);

  if (loading) return <h2 className="section-title">Cargando productos...</h2>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>;

  return (
    <>
      <ProductList products={products} />
      <ContactForm />
    </>
  );
};

export default CatalogoPage;