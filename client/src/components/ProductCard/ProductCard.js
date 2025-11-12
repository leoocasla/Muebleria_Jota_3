import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';

  return (
    <Link to={`/productos/${product._id}`} className="product-card-link">
      <div className="product-card">
        <img 
          src={`${apiUrl}${product.imagenUrl}`} 
          alt={product.nombre} 
          className="product-image" 
        />
        <div className="product-info">
          <h3 className="product-name">{product.nombre}</h3>
          <p className="product-price">${product.precio}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;