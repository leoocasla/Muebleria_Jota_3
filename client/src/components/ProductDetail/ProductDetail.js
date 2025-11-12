import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, onDelete, onAddToCart }) => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="detail-image-wrapper">
          <img 
            src={`${apiUrl}${product.imagenUrl}`} 
            alt={product.nombre} 
            className="detail-image" 
          />
        </div>
        <div className="detail-info">
          <h1 className="detail-title">{product.nombre}</h1>
          <p className="detail-description">{product.descripcion}</p>
          <p className="detail-price">${product.precio}</p>
          <div className="button-group">
            <button onClick={onAddToCart} className="cta-button">
              Añadir al Carrito
            </button>
            <button onClick={onDelete} className="cta-button delete-button">
              Eliminar Producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;