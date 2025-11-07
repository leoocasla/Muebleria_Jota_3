import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h1 className="section-title" style={{ fontSize: '3rem' }}>
        Bienvenido a Mueblería Jota
      </h1>
      <p style={{ fontSize: '1.2rem', margin: '1rem 0 2rem 0' }}>
        Calidad y diseño que transforman tu hogar.
      </p>
      <Link to="/productos" className="cta-button">
        Ver Catálogo
      </Link>
    </div>
  );
};

export default HomePage;