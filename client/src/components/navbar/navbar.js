import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartItemCount }) => {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Mueblería Jota</Link>
        </div>
        <nav className="navbar-nav">
          <Link to="/productos">Catálogo</Link>
          <Link to="/admin/crear-producto">Crear Producto</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <div className="navbar-cart">
          <span>🛒 Carrito ({cartItemCount})</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;