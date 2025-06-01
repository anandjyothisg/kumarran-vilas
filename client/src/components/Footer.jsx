import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-amber-100 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-amber-200 -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-300 translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-3xl font-serif font-bold text-amber-100 mb-3 tracking-wide">
                Kumarran Vilas
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-4"></div>
              <p className="text-amber-200 leading-relaxed text-sm">
                Crafting exquisite treasures with tradition since 1965. Each piece tells a story of heritage and artistry.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <SocialIcon href="https://facebook.com/kumarranvilas" platform="facebook">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </SocialIcon>
              <SocialIcon href="https://instagram.com/kumarranvilas" platform="instagram">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </SocialIcon>
              <SocialIcon href="https://wa.me/919443060703" platform="whatsapp">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </SocialIcon>
              <SocialIcon href="https://youtube.com/@kumarranvilas" platform="youtube">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-amber-100 mb-4 flex items-center">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#home" icon="home">Home</FooterLink>
                <FooterLink href="#legacy" icon="star">Our Legacy</FooterLink>
                <FooterLink href="#story" icon="book">Our Story</FooterLink>
                <FooterLink href="#products" icon="grid">Collections</FooterLink>
                <FooterLink href="#contact" icon="mail">Contact Us</FooterLink>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-amber-100 mb-4 flex items-center">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                Contact Us
              </h4>
              
              {/* Interactive Map Box */}
              <div 
                onClick={() => window.open('https://maps.app.goo.gl/KmhuoCn2KzfwA7DG7', '_blank')}
                className="mb-6 relative overflow-hidden rounded-xl border-2 border-gray-300 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group bg-white"
              >
                {/* Map Background */}
                <div className="h-32 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 relative">
                  {/* Street Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 130">
                    <path d="M50 20 Q100 30 150 25 T250 20 T350 25" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
                    <path d="M30 50 Q80 45 130 50 T230 55 T330 50" stroke="#9CA3AF" strokeWidth="1.5" fill="none"/>
                    <path d="M70 80 Q120 75 170 80 T270 85 T370 80" stroke="#9CA3AF" strokeWidth="1.5" fill="none"/>
                    <path d="M40 110 Q90 105 140 110 T240 115 T340 110" stroke="#9CA3AF" strokeWidth="1" fill="none"/>
                    {/* Vertical Streets */}
                    <path d="M100 0 L95 130" stroke="#9CA3AF" strokeWidth="1" fill="none"/>
                    <path d="M200 0 L205 130" stroke="#9CA3AF" strokeWidth="1.5" fill="none"/>
                    <path d="M300 0 L295 130" stroke="#9CA3AF" strokeWidth="1" fill="none"/>
                  </svg>
                  
                  {/* Location Pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full group-hover:animate-bounce">
                    <div className="relative">
                      {/* Pin Shadow */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black/20 rounded-full blur-sm"></div>
                      {/* Pin */}
                      <svg className="w-8 h-8 text-red-600 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Zoom Controls */}
                  <div className="absolute top-2 right-2 flex flex-col bg-white rounded shadow-md overflow-hidden">
                    <button className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-xs font-bold">+</button>
                    <div className="w-full h-px bg-gray-200"></div>
                    <button className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-xs font-bold">−</button>
                  </div>
                  
                  {/* Google Logo */}
                  <div className="absolute bottom-1 left-1 text-xs text-gray-500 font-medium">Google</div>
                </div>
                
                {/* Map Info Bar */}
                <div className="bg-white p-3 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <div>
                        <div className="text-gray-800 font-medium text-sm">Palani Kumarran Vilas</div>
                        <div className="text-gray-500 text-xs">Palani, Tamil Nadu • Open now</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span className="text-blue-600 text-xs font-medium">Directions</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-blue-600 font-medium text-sm">Click to open in Google Maps</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4">
                <ContactItem icon="location">
                  <div className="leading-relaxed">
                    <div className="font-medium text-amber-200">Palani Kumarran Vilas Viboothi Store</div>
                    <div className="text-sm text-amber-300 mt-1">
                      K.S.G.PALANIKUMAR<br/>
                      K.S.G.GNANASEKARAN<br/>
                      No 105, Sannathi Street, Adivaram,<br/>
                      Palani - 624601 TamilNadu
                    </div>
                  </div>
                </ContactItem>
                
                <ContactItem icon="email">
                  <a href="mailto:palanikumranavilas1940@gmail.com" className="text-amber-200 hover:text-amber-100 transition-colors">
                    palanikumranavilas1940@gmail.com
                  </a>
                </ContactItem>
                
                <ContactItem icon="phone">
                  <div className="space-y-1">
                    <a href="tel:+919443060703" className="text-amber-200 hover:text-amber-100 transition-colors block">
                      +91 94430 60703
                    </a>
                    <a href="tel:+919994465006" className="text-amber-200 hover:text-amber-100 transition-colors block">
                      +91 99944 65006
                    </a>
                  </div>
                </ContactItem>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-amber-100 mb-4 flex items-center">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                Newsletter
              </h4>
              <p className="text-amber-200 mb-6 text-sm leading-relaxed">
                Subscribe to receive updates on new collections and special offers.
              </p>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 pr-12 rounded-lg bg-amber-800/50 border border-amber-700/50 text-amber-100 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                </div>
                <button
                  className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                  onClick={() => alert('Newsletter subscription feature coming soon!')}
                >
                  <span>Subscribe</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-amber-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-300 text-sm">
              © {new Date().getFullYear()} Kumarran Vilas. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <FooterBottomLink href="#">Privacy Policy</FooterBottomLink>
              <FooterBottomLink href="#">Terms of Service</FooterBottomLink>
              <FooterBottomLink href="#">Shipping Information</FooterBottomLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children, icon }) => {
  const getIcon = () => {
    switch(icon) {
      case 'home':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>;
      case 'star':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>;
      case 'book':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>;
      case 'grid':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>;
      case 'mail':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>;
      default:
        return null;
    }
  };

  return (
    <li>
      <a
        href={href}
        className="group flex items-center space-x-3 text-amber-200 hover:text-amber-100 transition-all duration-300 text-sm"
      >
        <svg className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {getIcon()}
        </svg>
        <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
      </a>
    </li>
  );
};

const ContactItem = ({ icon, children }) => {
  const getIcon = () => {
    switch(icon) {
      case 'location':
        return (
          <>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </>
        );
      case 'email':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>;
      case 'phone':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>;
      default:
        return null;
    }
  };

  return (
    <li className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-10 h-10 bg-amber-700/50 rounded-lg flex items-center justify-center mt-1">
        <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {getIcon()}
        </svg>
      </div>
      <div className="flex-1 text-sm">
        {children}
      </div>
    </li>
  );
};

const SocialIcon = ({ href, children, platform }) => {
  const getHoverColor = () => {
    switch(platform) {
      case 'facebook': return 'hover:bg-blue-600';
      case 'instagram': return 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600';
      case 'whatsapp': return 'hover:bg-green-600';
      case 'youtube': return 'hover:bg-red-600';
      default: return 'hover:bg-amber-600';
    }
  };

  return (
    <a
      href={href}
      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-amber-700/50 ${getHoverColor()} text-amber-200 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm`}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  );
};

const FooterBottomLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-amber-300 hover:text-amber-100 transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default Footer;
