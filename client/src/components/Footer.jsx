import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Brief */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-amber-200 mb-4">Kumarran Vilas</h3>
            <p className="text-amber-300 mb-6">
              Crafting exquisite treasures with tradition since 1965. Each piece tells a story of heritage and artistry.
            </p>
            <div className="flex space-x-4">
              <SocialIcon>
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </SocialIcon>
              <SocialIcon>
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </SocialIcon>
              <SocialIcon>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium text-amber-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#legacy">Our Legacy</FooterLink>
              <FooterLink href="#story">Our Story</FooterLink>
              <FooterLink href="#products">Collections</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium text-amber-200 mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Palani Kumarran Vilas Viboothi Store
                      K.S.G.PALANIKUMAR
                      K.S.G.GNANASEKARAN
                      No 105, Sannathi Street, Adivaram,
                      Palani - 624601 TamilNadu
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>palanikumranavilas1940@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 94430 60703,
                    +91 99944 65006
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium text-amber-200 mb-4">Newsletter</h4>
            <p className="text-amber-300 mb-4">
              Subscribe to receive updates on new collections and special offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-amber-800 border border-amber-700 text-amber-100 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-800 text-center text-amber-400 text-sm">
          <p>© {new Date().getFullYear()} Kumarran Vilas. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Shipping Information</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        className="text-amber-300 hover:text-amber-100 transition-colors duration-300"
      >
        {children}
      </a>
    </li>
  );
};

const SocialIcon = ({ children }) => {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-800 hover:bg-amber-700 text-amber-200 transition-colors duration-300"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  );
};

export default Footer;