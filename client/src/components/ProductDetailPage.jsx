import React, { useState } from 'react';
import { Heart, Share2, ShoppingCart, Star, ChevronLeft, ChevronRight, Plus, Minus, Truck, Shield, RotateCcw, Award, Check, Phone, Mail, MapPin } from 'lucide-react';

const ProductDetailPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('50 gms');
  const [selectedType, setSelectedType] = useState('Regular');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const productImages = [
    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1573160103600-9384984be521?w=600&h=600&fit=crop'
  ];

  const sizes = ['25 gms', '50 gms', '100 gms', '250 gms', '500 gms'];
  const types = ['Regular', 'Premium', 'Special Quality'];

  const reviews = [
    { name: 'Priya R.', rating: 5, comment: 'Excellent quality Viboothi. Very pure and authentic. Fast delivery too!', date: '3 days ago' },
    { name: 'Raman S.', rating: 5, comment: 'Best quality sacred ash. Been using Kumarran Vilas products for years.', date: '1 week ago' },
    { name: 'Lakshmi K.', rating: 4, comment: 'Good packaging and genuine product. Highly recommended for daily prayers.', date: '2 weeks ago' }
  ];

  const relatedProducts = [
    { id: 1, name: 'Sandalwood Incense Sticks', price: 45, image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?w=300&h=300&fit=crop' },
    { id: 2, name: 'Camphor Tablets', price: 35, image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop' },
    { id: 3, name: 'Dhoop Cups', price: 28, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop' },
    { id: 4, name: 'Turmeric Powder', price: 65, image: 'https://images.unsplash.com/photo-1615485925763-222fb2db0d35?w=300&h=300&fit=crop' }
  ];

  const handleImageChange = (direction) => {
    if (direction === 'prev') {
      setSelectedImageIndex(prev => prev === 0 ? productImages.length - 1 : prev - 1);
    } else {
      setSelectedImageIndex(prev => prev === productImages.length - 1 ? 0 : prev + 1);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-orange-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-amber-700 mb-8">
          <span className="hover:text-amber-900 cursor-pointer">Home</span> <span className="mx-2">/</span>
          <span className="hover:text-amber-900 cursor-pointer">Incense & Viboothi</span> <span className="mx-2">/</span>
          <span className="text-amber-900 font-medium">Sacred Viboothi</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-lg border-2 border-amber-200">
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                Premium
              </div>
              <img
                src={productImages[selectedImageIndex]}
                alt="Sacred Viboothi"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => handleImageChange('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all border border-amber-200"
              >
                <ChevronLeft className="w-5 h-5 text-amber-800" />
              </button>
              <button
                onClick={() => handleImageChange('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all border border-amber-200"
              >
                <ChevronRight className="w-5 h-5 text-amber-800" />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all shadow-md ${
                    selectedImageIndex === index ? 'border-amber-600 shadow-lg' : 'border-amber-200 hover:border-amber-400'
                  }`}
                >
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="bg-amber-100 inline-block px-3 py-1 rounded-full text-sm text-amber-800 font-medium mb-3">
                Incense & Viboothi
              </div>
              <h1 className="text-3xl font-bold text-amber-900 mb-3">SACRED QUALITY VIBOOTHI</h1>
              <p className="text-amber-700 mb-4">Pure Sacred Ash for Daily Prayers and Rituals</p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(5)}
                  <span className="text-sm text-amber-600 ml-2">(89 reviews)</span>
                </div>
                <span className="text-sm text-green-700 font-medium bg-green-100 px-2 py-1 rounded">In Stock</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-amber-900">₹75.00</span>
                <span className="text-xl text-gray-500 line-through">₹95.00</span>
                <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">21% OFF</span>
              </div>
            </div>

            {/* Type Selection */}
            <div>
              <h3 className="text-sm font-medium text-amber-900 mb-3">Quality: {selectedType}</h3>
              <div className="grid grid-cols-3 gap-3">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`py-2 px-3 text-sm font-medium rounded-md border transition-all ${
                      selectedType === type
                        ? 'border-amber-600 bg-amber-100 text-amber-800'
                        : 'border-amber-300 hover:border-amber-400 bg-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium text-amber-900 mb-3">Size: {selectedSize}</h3>
              <div className="grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-sm font-medium rounded-md border transition-all ${
                      selectedSize === size
                        ? 'border-amber-600 bg-amber-100 text-amber-800'
                        : 'border-amber-300 hover:border-amber-400 bg-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-amber-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-amber-300 rounded-md hover:bg-amber-50 bg-white"
                >
                  <Minus className="w-4 h-4 text-amber-800" />
                </button>
                <span className="px-4 py-2 border border-amber-300 rounded-md min-w-16 text-center bg-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-amber-300 rounded-md hover:bg-amber-50 bg-white"
                >
                  <Plus className="w-4 h-4 text-amber-800" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all shadow-lg">
                <ShoppingCart className="w-5 h-5" />
                <span>View Price and Details</span>
              </button>
              <div className="flex space-x-4">
                <button className="flex-1 border border-amber-400 hover:bg-amber-50 py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors bg-white text-amber-800">
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </button>
                <button className="flex-1 border border-amber-400 hover:bg-amber-50 py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors bg-white text-amber-800">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-amber-200 pt-6 space-y-4 bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="text-sm text-amber-800">Free shipping on orders above ₹500</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-amber-800">7-day return policy for unopened items</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-amber-800">100% authentic and pure viboothi</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-yellow-600" />
                <span className="text-sm text-amber-800">Trusted since 1965</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="border-b border-amber-300 mb-8 bg-white rounded-t-lg">
          <nav className="-mb-px flex space-x-8 px-6">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-amber-600 text-amber-700'
                    : 'border-transparent text-amber-600 hover:text-amber-800 hover:border-amber-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="mb-16 bg-white rounded-b-lg p-6 shadow-sm">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-amber-800 leading-relaxed mb-4">
                Our Sacred Viboothi is prepared following traditional methods passed down through generations. 
                Made from pure cow dung ash, this sacred powder is perfect for daily prayers, religious ceremonies, 
                and spiritual practices.
              </p>
              <p className="text-amber-800 leading-relaxed mb-4">
                Each packet is carefully prepared and blessed in our traditional facility. The viboothi is 
                finely sifted to ensure smooth texture and purity. Ideal for applying on forehead during prayers 
                and for use in various Hindu rituals.
              </p>
              <h4 className="font-semibold text-amber-900 mb-2">Sacred Properties:</h4>
              <ul className="list-none space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-amber-800">100% pure sacred ash from cow dung</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-amber-800">Prepared using traditional methods</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-amber-800">Blessed and sanctified for worship</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-amber-800">Fine texture for easy application</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-amber-900 mb-4">Product Details</h4>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-amber-700">Material:</dt>
                    <dd className="text-amber-900">Pure Cow Dung Ash</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-700">Texture:</dt>
                    <dd className="text-amber-900">Fine Powder</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-700">Color:</dt>
                    <dd className="text-amber-900">Light Gray/White</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-700">Packaging:</dt>
                    <dd className="text-amber-900">Sealed Pouch</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-4">Usage & Storage</h4>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-amber-700">Usage:</dt>
                    <dd className="text-amber-900">Daily Prayers</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-700">Application:</dt>
                    <dd className="text-amber-900">Forehead & Body</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-700">Storage:</dt>
                    <dd className="text-amber-900">Dry Place</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-700">Shelf Life:</dt>
                    <dd className="text-amber-900">No Expiry</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-amber-900">Customer Reviews</h3>
                <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                  Write a Review
                </button>
              </div>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b border-amber-200 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-amber-900">{review.name}</span>
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <span className="text-sm text-amber-600">{review.date}</span>
                    </div>
                    <p className="text-amber-800">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-amber-900 mb-2">Our Authentic Collection of Products</h2>
          <div className="w-16 h-1 bg-amber-600 mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden border border-amber-200 hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-orange-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-amber-900 mb-1">{product.name}</h3>
                  <p className="text-lg font-semibold text-amber-800">₹{product.price}.00</p>
                  <button className="w-full mt-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-2 px-4 rounded text-sm font-medium transition-all">
                    View Price and Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;