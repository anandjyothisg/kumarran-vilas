import { useState, useEffect } from 'react';

const Navbar = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Enhanced glass-morphic effect that increases with scroll
  const navbarOpacity = Math.min(0.8, 0.2 + scrollY / 1200);
  const navbarBlur = Math.min(20, 8 + scrollY / 100);
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav 
      className="sticky top-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-red-900/20"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${navbarOpacity})`,
        backdropFilter: `blur(${navbarBlur}px)`,
        boxShadow: scrollY > 20 
          ? '0 4px 30px rgba(153, 27, 27, 0.15), 0 0 10px rgba(153, 27, 27, 0.05)' 
          : 'none',
        fontFamily: 'Red Rose, cursive'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop view with centered layout - logo and nav horizontally aligned */}
        <div className="hidden md:flex items-center justify-center h-20">
          <div className="flex items-center justify-center space-x-6">
            {/* Logo */}
            <div className="flex-shrink-0 transition-transform duration-500 ease-in-out hover:scale-105">
              <a href="#home" className="block">
                <img 
                  src="/images/logo_foot.png" 
                  alt="Kumarran Vilas Logo" 
                  className="h-12 w-auto"
                />
              </a>
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-baseline space-x-2">
              <NavLink href="#home" isActive={isHovered === 'home'} onHover={() => setIsHovered('home')}>Home</NavLink>
              <NavLink href="#legacy" isActive={isHovered === 'legacy'} onHover={() => setIsHovered('legacy')}>Our Legacy</NavLink>
              <NavLink href="#story" isActive={isHovered === 'story'} onHover={() => setIsHovered('story')}>Our Story</NavLink>
              <NavLink href="#products" isActive={isHovered === 'products'} onHover={() => setIsHovered('products')}>Products</NavLink>
              <NavLink href="#contact" isActive={isHovered === 'contact'} onHover={() => setIsHovered('contact')}>Contact</NavLink>
            </div>
          </div>
        </div>
        
        {/* Mobile view */}
        <div className="md:hidden flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 transition-all duration-500 ease-in-out hover:scale-105">
              <a href="#home" className="block">
                <img 
                  src="/images/logo_foot.png" 
                  alt="Kumarran Vilas Logo" 
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>
          
          {/* Mobile menu button with smoother animation */}
          <div>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md bg-gradient-to-r from-yellow-600 to-amber-500 border border-amber-700 shadow-md focus:outline-none transition-all duration-500 ease-in-out hover:shadow-lg"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute block w-6 h-0.5 bg-red-900 transition-all duration-500 ease-in-out ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-2'
                  }`}
                ></span>
                <span 
                  className={`absolute block w-6 h-0.5 bg-red-900 transition-all duration-500 ease-in-out top-3 ${
                    isMenuOpen ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
                  }`}
                ></span>
                <span 
                  className={`absolute block w-6 h-0.5 bg-red-900 transition-all duration-500 ease-in-out ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-4'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with enhanced animation */}
      <div 
        className={`md:hidden transition-all duration-700 ease-in-out transform ${
          isMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-amber-50/95 to-white/80 backdrop-blur-xl border-t border-amber-800/20 shadow-lg">
          <MobileNavLink href="#home">Home</MobileNavLink>
          <MobileNavLink href="#legacy">Legacy</MobileNavLink>
          <MobileNavLink href="#story">Our Story</MobileNavLink>
          <MobileNavLink href="#products">Products</MobileNavLink>
          <MobileNavLink href="#contact">Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

// Enhanced navigation link component for desktop with smoother hover effects
const NavLink = ({ href, children, isActive, onHover }) => {
  return (
    <a
      href={href}
      className={`px-4 py-2 rounded-md text-sm font-medium text-red-900 transition-all duration-500 ease-in-out relative overflow-hidden ${
        isActive ? 'bg-amber-100/30' : ''
      }`}
      style={{ fontFamily: 'Red Rose, cursive' }}
      onMouseEnter={onHover}
      onMouseLeave={() => onHover(null)}
    >
      {children}
      <span 
        className={`absolute bottom-0 left-1/2 h-0.5 bg-red-900 transition-all duration-500 ease-in-out ${
          isActive ? 'w-4/5 -translate-x-1/2' : 'w-0'
        }`}
      ></span>
      <span className="absolute inset-0 bg-amber-100/0 transition-all duration-500 ease-in-out hover:bg-amber-100/20 rounded-md"></span>
    </a>
  );
};

// Enhanced navigation link component for mobile with smoother transitions
const MobileNavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="block px-3 py-3 rounded-md text-base font-medium text-red-900 hover:text-red-800 hover:bg-amber-200/40 transition-all duration-500 ease-in-out transform hover:translate-x-2 group"
      style={{ fontFamily: 'Red Rose, cursive' }}
    >
      <div className="flex items-center">
        <span className="mr-2 opacity-0 transition-all duration-500 ease-in-out transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">•</span>
        {children}
      </div>
    </a>
  );
};

export default Navbar;