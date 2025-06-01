import { useState, useEffect } from 'react';
import React from 'react';

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  
  // Product data with updated categories and multiple images for products
  const allProducts = [
    {
      id: 1,
      name: 'SPECIAL QUALITY JAVVATHU SCENTED VIBOOTHI',
      category: 'viboothi',
      subcategory: 'Incense & Viboothi',
      price: '₹350',
      images: [
        '/images/specialvibuthi/01.png',
        '/images/specialvibuthi/03.png',
        '/images/specialvibuthi/04.png',
        '/images/specialvibuthi/05.png',
      ],
      image: '/images/specialvibuthi/01.png', // Keep for backwards compatibility
      featured: true
    },
    {
      id: 2,
      name: 'REGULAR QUALITY JAVVATHU SCENTED VIBOOTHI',
      category: 'viboothi',
      subcategory: 'Incense & Viboothi',
      price: '₹220',
      images: [
        '/images/regularvibuthi/01.png',
        '/images/regularvibuthi/02.png',
        '/images/regularvibuthi/03.png',
        '/images/regularvibuthi/04.png',
        '/images/regularvibuthi/05.png',
      ],
      image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&h=400&fit=crop', // Keep for backwards compatibility
      featured: false
    },
    {
      id: 3,
      name: 'POUCH PACKING VIBOOTHI',
      category: 'viboothi',
      subcategory: 'Incense & Viboothi',
      price: '₹180',
      images: [
        '/images/ppvibuthi/01.png',
        '/images/ppvibuthi/02.png',
        '/images/ppvibuthi/03.png',
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      name: 'HAND MADE PAPER PACKETS',
      category: 'packaging',
      subcategory: 'Packaging',
      price: '₹120',
      images: [
        '/images/handmadevibuthi/01.png',
        '/images/handmadevibuthi/02.png',
        '/images/handmadevibuthi/03.png',
      ],
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      name: 'PLAIN VIBOOTHI WITHOUT SCENTED',
      category: 'viboothi',
      subcategory: 'Incense & Viboothi',
      price: '₹150',
      images: [
        '/images/plainvibuthi/01.png',
        '/images/plainvibuthi/02.png',
        '/images/plainvibuthi/03.png',
      ],
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      name: 'SPECIAL QUALITY SANDAL SCENTED POWDER',
      category: 'sandal',
      subcategory: 'Cup & Dhoops',
      price: '₹380',
      images: [
        '/images/specialsandal/01.png',
        '/images/specialsandal/02.png',
        '/images/specialsandal/03.png',
        '/images/specialsandal/04.png',
        '/images/specialsandal/05.png',
      ],
      image: 'https://images.unsplash.com/photo-1596040808084-75e4dcb7c8e4?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 7,
      name: 'REGULAR QUALITY SANDAL SCENTED POWDER',
      category: 'sandal',
      subcategory: 'Cup & Dhoops',
      price: '₹270',
      images: [
        '/images/regularsandal/01.png',
        '/images/regularsandal/02.png',
        '/images/regularsandal/03.png',
        '/images/regularsandal/04.png',
        '/images/regularsandal/05.png',     
      ],
      image: 'https://images.unsplash.com/photo-1604497181015-76dc2e4d9f3d?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 8,
      name: 'SANDAL SCENTED TABLETS',
      category: 'sandal',
      subcategory: 'Cup & Dhoops',
      price: '₹200',
      images: [
        '/images/tabletsandal/01.png',
        '/images/tabletsandal/02.png',
        '/images/tabletsandal/03.png',
        '/images/tabletsandal/04.png',
        '/images/tabletsandal/05.png',
      ],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 9,
      name: 'SANDAL SCENTED POWDER TIN',
      category: 'sandal',
      subcategory: 'Cup & Dhoops',
      price: '₹450',
      images: [
        '/images/tinsandal/01.png',
        '/images/tinsandal/02.png',
        '/images/tinsandal/03.png',
        '/images/tinsandal/04.png',
        '/images/tinsandal/05.png',
        '/images/tinsandal/06.png',
      ],
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 10,
      name: 'SANDAL SCENTED BALLS, IDLY VILLAI',
      category: 'sandal',
      subcategory: 'Cup & Dhoops',
      price: '₹220',
      images: [
        '/images/villaisandal/01.png',
        '/images/villaisandal/02.png',
        '/images/villaisandal/03.png',
        '/images/villaisandal/04.png',
        '/images/villaisandal/05.png',
      ],
      image: 'https://images.unsplash.com/photo-1609501676725-7186f6ae4648?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 11,
      name: 'DASANGAM DHOOP POWDER',
      category: 'dhoop',
      subcategory: 'Cup & Dhoops',
      price: '₹300',
      images: [
        '/images/dasangam/01.png',
        '/images/dasangam/02.png',
        '/images/dasangam/03.png',
        '/images/dasangam/04.png',
        '/images/dasangam/05.png',
        '/images/dasangam/06.png',
      ],
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 12,
      name: 'JAVVATHU POWDER',
      category: 'other',
      subcategory: 'Incense & Viboothi',
      price: '₹420',
      images: [
        '/images/javvadhu/01.png',
        '/images/javvadhu/02.png',
        '/images/javvadhu/03.png',
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 13,
      name: 'Special Panchamirtham',
      category: 'other',
      subcategory: 'Special Products',
      price: '₹280',
      images: [
        '/images/panchamirtham/01.png',
        '/images/panchamirtham/02.png',
      ],
      image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&h=400&fit=crop',
      featured: true
    },
  ];
  
  useEffect(() => {
    // Initialize quantities for all products
    const initialQuantities = {};
    allProducts.forEach(product => {
      initialQuantities[product.id] = 1;
    });
    setQuantities(initialQuantities);
    
    // Filter products based on active category
    if (activeCategory === 'all') {
      setProducts(allProducts);
    } else if (activeCategory === 'new') {
      setProducts(allProducts.slice(0, 4)); // First 4 as "new products"
    } else if (activeCategory === 'trending') {
      setProducts(allProducts.filter(product => product.featured));
    } else {
      setProducts(allProducts.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);
  
  // Handle quantity changes
  const decrementQuantity = (productId) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, prev[productId] - 1)
    }));
  };
  
  const incrementQuantity = (productId) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: prev[productId] + 1
    }));
  };

  // Handle navigation to product detail page
  const handleViewDetails = (product) => {
    alert(`Viewing details for: ${product.name}\nPrice: ${product.price}\nQuantity: ${quantities[product.id]}`);
  };

  const categories = [
    { id: 'all', name: 'Show All' },
    { id: 'new', name: 'New Products' },
    { id: 'trending', name: 'Trending' },
    { id: 'viboothi', name: 'Viboothi' },
    { id: 'sandal', name: 'Sandal' },
    { id: 'dhoop', name: 'Dhoop' },
  ];

  return (
    <>
      {/* Add Google Fonts import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Red+Rose:wght@300;400;500;600;700&display=swap');
      `}</style>
      
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-amber-900 mb-4" style={{ fontFamily: 'Red Rose', fontWeight: 600 }}>
              Our Authentic Collection of Products
            </h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          </div>

          {/* Category filters - Simple elegant tabs */}
          <div className="flex justify-center mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 mx-1 my-1 transition-all duration-300 font-medium ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white rounded-full shadow-md'
                    : 'text-amber-900 hover:text-red-600'
                }`}
                style={{ fontFamily: 'Red Rose', fontWeight: 600 }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid - 2 columns on mobile, more on larger screens */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
                quantity={quantities[product.id]}
                onDecrement={() => decrementQuantity(product.id)}
                onIncrement={() => incrementQuantity(product.id)}
                onViewDetails={() => handleViewDetails(product)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Image slideshow component for product cards
const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Make sure we have a valid images array
  const validImages = Array.isArray(images) && images.length > 0 ? images : ['https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&h=400&fit=crop'];
  
  // If only one image, don't show controls
  const showControls = validImages.length > 1;
  
  const goToNext = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % validImages.length);
  };
  
  const goToPrev = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + validImages.length) % validImages.length);
  };
  
  return (
    <div className="relative w-full h-48 sm:h-64 md:h-48 lg:h-64">
      {validImages.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Product view ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Navigation arrows - only show if multiple images */}
      {showControls && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 shadow-md text-amber-900 hover:bg-opacity-90 transition-all z-10"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 shadow-md text-amber-900 hover:bg-opacity-90 transition-all z-10"
            aria-label="Next image"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Image indicators */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1 z-10">
            {validImages.map((_, index) => (
              <span
                key={index}
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-3 sm:w-4 bg-amber-500' : 'w-1 sm:w-1.5 bg-gray-300'
                }`}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Enhanced Product Card Component with Image Slideshow
const ProductCard = ({ product, index, quantity, onDecrement, onIncrement, onViewDetails }) => {
  // Ensure we have a valid images array, fallback to single image if not
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : product.image ? [product.image] : ['https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&h=400&fit=crop'];
  
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg flex flex-col h-96 sm:h-[420px] md:h-96 lg:h-[420px]"
    >
      {/* Product image slideshow */}
      <div className="relative overflow-hidden">
        <ImageSlideshow images={productImages} />
        {product.featured && (
          <div className="absolute top-2 right-2 bg-amber-800 text-white text-xs px-2 py-1 rounded z-20">
            Premium
          </div>
        )}
      </div>
      
      {/* Product details */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <div className="text-xs sm:text-sm text-gray-500 mb-1">{product.subcategory}</div>
        <h3 
          className="text-amber-900 font-semibold text-xs sm:text-sm mb-2 line-clamp-3 sm:line-clamp-2 flex-grow" 
          style={{ fontFamily: 'Red Rose', fontWeight: 600 }}
        >
          {product.name}
        </h3>
        
        {/* Quantity selector */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center border border-gray-300 rounded text-sm">
            <button 
              onClick={onDecrement}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 text-xs sm:text-sm"
            >
              -
            </button>
            <span className="px-2 sm:px-3 py-1 border-l border-r border-gray-300 text-xs sm:text-sm">{quantity}</span>
            <button 
              onClick={onIncrement}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 text-xs sm:text-sm"
            >
              +
            </button>
          </div>
        </div>
        
        {/* View Price and Details Button */}
        <button 
          onClick={onViewDetails}
          className="w-4/5 mx-auto mt-3 bg-amber-500 hover:bg-amber-600 py-2 rounded-lg text-white font-semibold transition-colors text-xs sm:text-sm"
          style={{ fontFamily: 'Red Rose', fontWeight: 600 }}
        >
          View Price and Details
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;