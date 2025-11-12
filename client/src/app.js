import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage';
import CatalogoPage from './pages/CatalogoPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CreateProductPage from './pages/CreateProductPage';


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
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;