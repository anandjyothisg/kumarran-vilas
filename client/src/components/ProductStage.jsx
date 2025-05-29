import React, { useState, useEffect } from 'react';

const ProductStage = () => {
  // Replace these with your actual product images
  const products = [
    { id: 1, name: 'Product 1', image: 'images/specialvibuthi/03.png' },
    { id: 2, name: 'Product 2', image: 'images/handmadetrans.png' },
    { id: 3, name: 'Product 3', image: 'images/regularvibuthi/03.png' },
    { id: 4, name: 'Product 4', image: 'images/plainvibuthi/04.png' },
    { id: 5, name: 'Product 5', image: 'images/villaisandal/06.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide products every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="w-full">
      {/* Main Container */}
      <div className="relative w-full">
        
        {/* Background Stage Image Container */}
        <div 
          className="relative w-full"
          style={{
            aspectRatio: '2368/1204', // Maintains original image aspect ratio (2368:1204)
            backgroundImage: "url('/images/stagebg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Product Display Area */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/4">
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
              
              {/* Products with sliding animations */}
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`absolute transition-all duration-1000 ease-in-out transform ${
                    index === currentIndex
                      ? 'opacity-100 scale-100 translate-x-0 rotate-0'
                      : 'opacity-0 scale-75'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 md:w-52 md:h-52 object-contain drop-shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStage;