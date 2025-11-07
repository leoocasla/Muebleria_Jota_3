import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import HomePage from './pages/homePage';
import CatalogoPage from './pages/catalogoPage';
import ProductDetailPage from './pages/productDetailPage';
import CreateProductPage from './pages/createProductPage';
import ContactoPage from './pages/contactoPage';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <Navbar cartItemCount={cartCount} />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<CatalogoPage />} />
          <Route 
            path="/productos/:id" 
            element={<ProductDetailPage onAddToCart={handleAddToCart} />} 
          />
          <Route path="/admin/crear-producto" element={<CreateProductPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;