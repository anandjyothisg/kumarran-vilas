import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Legacy from './Legacy';
import Story from './Story';
import ProductGallery from './ProductGallery';
import Footer from './Footer';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Legacy />
      <Story />
      <ProductGallery />
      <Footer />
    </div>
  );
};

export default HomePage;