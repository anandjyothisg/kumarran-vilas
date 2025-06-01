import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Legacy from '../components/Legacy';
import Story from '../components/Story';
import ProductGallery from '../components/ProductGallery';
import Footer from '../components/Footer';
import ProductStage from '../components/ProductStage';
import AIAssistant from '../components/AIChat.jsx';

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
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-amber-50 to-amber-100">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Legacy />
      <ProductStage />
      <ProductGallery />
      <Story />
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default HomePage;