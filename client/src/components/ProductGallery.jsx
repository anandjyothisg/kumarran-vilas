import { useState, useEffect, useRef } from 'react';
import React from 'react';

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const productRefs = useRef([]);
  
  // Sample product data - in a real application, this would come from an API
  const allProducts = [
    {
      id: 1,
      name: 'Handcrafted Silver Necklace',
      category: 'jewelry',
      price: '₹12,500',
      image: '/images/products/necklace.jpg',
      featured: true
    },
    {
      id: 2,
      name: 'Embroidered Silk Saree',
      category: 'textiles',
      price: '₹35,000',
      image: '/images/products/saree.jpg',
      featured: true
    },
    {
      id: 3,
      name: 'Brass Temple Lamp',
      category: 'home',
      price: '₹8,750',
      image: '/images/products/lamp.jpg',
      featured: false
    },
    {
      id: 4,
      name: 'Hand-Painted Wooden Box',
      category: 'home',
      price: '₹5,200',
      image: '/images/products/box.jpg',
      featured: false
    },
    {
      id: 5,
      name: 'Gold Plated Anklet',
      category: 'jewelry',
      price: '₹9,800',
      image: '/images/products/anklet.jpg',
      featured: false
    },
    {
      id: 6,
      name: 'Heritage Silk Dupatta',
      category: 'textiles',
      price: '₹7,200',
      image: '/images/products/dupatta.jpg',
      featured: false
    },
    {
      id: 7,
      name: 'Traditional Silver Earrings',
      category: 'jewelry',
      price: '₹6,900',
      image: '/images/products/earrings.jpg',
      featured: true
    },
    {
      id: 8,
      name: 'Carved Wooden Wall Art',
      category: 'home',
      price: '₹15,500',
      image: '/images/products/wall-art.jpg',
      featured: true
    },
  ];
  
  useEffect(() => {
    // Filter products based on active category
    if (activeCategory === 'all') {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter(product => product.category === activeCategory));
    }
    
    // Reset and initialize product refs
    productRefs.current = products.map(() => null);
  }, [activeCategory]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'scale-100');
            entry.target.classList.remove('opacity-0', 'scale-95');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    productRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      productRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [products]);

  // Add refs to the array
  const addToRefs = (el, index) => {
    if (el && !productRefs.current[index]) {
      productRefs.current[index] = el;
    }
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'jewelry', name: 'Jewelry' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'home', name: 'Home Decor' },
  ];

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-amber-800 mb-4">
            Our Collections
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-amber-900 max-w-3xl mx-auto">
            Explore our exquisite range of handcrafted treasures, each telling a unique story of tradition and artistry.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-700 text-white'
                  : 'bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm text-amber-800 hover:bg-amber-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Products Section */}
        {activeCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-amber-800 mb-8">
              Featured Treasures
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {allProducts
                .filter(product => product.featured)
                .map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    ref={(el) => addToRefs(el, index)}
                    index={index}
                  />
                ))}
            </div>
          </div>
        )}

        {/* All Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .filter(product => activeCategory !== 'all' || !product.featured)
            .map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                ref={(el) => addToRefs(el, index + (activeCategory === 'all' ? 4 : 0))}
                index={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

// Product Card Component with forwardRef to use animation refs
const ProductCard = React.forwardRef(({ product, index }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white border-opacity-30 group transition-all duration-500 opacity-0 scale-95"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image || '/images/product-placeholder.jpg'}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-600 text-white rounded-full mb-2">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
          <h3 className="text-white font-medium text-lg">{product.name}</h3>
          <p className="text-amber-200 font-semibold">{product.price}</p>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <button className="text-amber-800 hover:text-amber-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <button className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-md transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
});

export default ProductGallery;