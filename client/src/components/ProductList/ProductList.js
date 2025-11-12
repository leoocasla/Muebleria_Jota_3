import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <section className="product-list-section">
      <h2 className="section-title">Nuestro Catálogo</h2>
      {products.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No hay productos para mostrar.</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;