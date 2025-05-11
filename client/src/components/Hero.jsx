import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  // Check if we're running in a browser environment
  const isBrowser = typeof window !== 'undefined';
  // Images for the slider - replace with your actual image paths
  const images = [
    '/images/banner1.png',
    '/images/banner2.png',
    '/images/banner3.png',
    '/images/banner4.png',
    '/images/banner5.png',
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);
  
  // Auto-advance slides with error handling to prevent crashes
  useEffect(() => {
    try {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
      
      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    } catch (err) {
      console.error("Error in slider timer:", err);
      // Ensure we clean up any existing timer if there's an error
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  }, []);
  
  const nextSlide = () => {
    if (!isBrowser || isTransitioning) return;
    
    try {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      
      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    } catch (err) {
      console.error("Error in nextSlide:", err);
      setIsTransitioning(false);
    }
  };
  
  const prevSlide = () => {
    if (!isBrowser || isTransitioning) return;
    
    try {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    } catch (err) {
      console.error("Error in prevSlide:", err);
      setIsTransitioning(false);
    }
  };
  
  // Reset timer when manually changing slides
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
  };
  
  const handlePrev = () => {
    prevSlide();
    resetTimer();
  };
  
  const handleNext = () => {
    nextSlide();
    resetTimer();
  };

  return (
    <section id="home" className="relative w-full h-auto overflow-hidden bg-black">
      {/* Image slider with 16:9 aspect ratio */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        
        {/* Subtle bottom vignette only */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      {/* Pure white arrow SVGs with no container or background */}
      <div 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
        aria-label="Previous slide"
      >
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <div
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
        aria-label="Next slide"
      >
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      {/* Sleek curved rectangular indicators */}
      <div className="absolute bottom-3 md:bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 md:h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-white w-4 md:w-6' : 'bg-white/40 w-2 md:w-3'
            }`}
            onClick={() => {
              setCurrentSlide(index);
              resetTimer();
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;