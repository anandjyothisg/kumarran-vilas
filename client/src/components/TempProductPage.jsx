import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetailPage from "./ProductDetailPage";
import Footerpage from "./Footer";

function ProductPage() {
  const location = useLocation();
  const { product, quantity } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <ProductDetailPage product={product} quantity={quantity} />
      </main>
      <footer>
        <Footerpage />
      </footer>
    </div>
  );
}

export default ProductPage;