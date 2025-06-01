import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductDetailPage from "../components/ProductDetailPage";
import Footerpage from "../components/Footer";
import AIAssistant from '../components/AIChat.jsx';

function ProductPage() {
  const location = useLocation();
  const { product, quantity } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Navbar scrollY={scrollY} />
        <ProductDetailPage product={product} quantity={quantity} />
      </main>
      <footer>
        <Footerpage />
      </footer>
      <AIAssistant />
    </div>
  );
}

export default ProductPage;