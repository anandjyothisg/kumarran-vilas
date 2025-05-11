import { useState, useEffect } from 'react';

const LoadingPage = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [particles, setParticles] = useState([]);

  // Kumarran Vilas theme colors
  const colors = {
    maroon: '#8B1A1A', // Dark maroon for inner circle
    gold: '#F9E5B7',   // Golden yellow for background
    darkGold: '#D4AF37', // Darker gold for accents
    red: '#B22222',    // Red for some elements
  };

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.2
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowContent(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, ${colors.gold} 0%, ${colors.gold} 50%, ${colors.darkGold} 100%)`,
        }}
      />

      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: colors.darkGold,
              opacity: particle.opacity,
              animation: `float ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 opacity-20" 
          style={{
            background: `repeating-conic-gradient(rgba(212, 175, 55, 0.1) 0deg, rgba(212, 175, 55, 0) 5deg, rgba(212, 175, 55, 0.1) 10deg)`,
            animation: 'spin 40s linear infinite'
          }}
        />
      </div>

      <div className={`relative flex flex-col items-center justify-center transition-all duration-1000 ${showContent ? 'scale-110' : 'scale-100'}`}>
        <div className="absolute w-64 h-64 rounded-full">
          <div className="relative w-full h-full animate-spin-smooth">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 blur-sm"></div>
            <div className="absolute inset-3 rounded-full blur-[2px]" style={{ backgroundColor: colors.darkGold }}></div>
          </div>
        </div>

        <div className="absolute w-60 h-60 rounded-full animate-pulse-glow border opacity-70"
             style={{
               borderColor: colors.darkGold,
               boxShadow: `0 0 15px 2px rgba(212, 175, 55, 0.4)`,
               animation: 'pulse-glow 3s ease-in-out infinite alternate'
             }}></div>

        <div className="absolute w-48 h-48 rounded-full flex items-center justify-center"
             style={{
               backgroundColor: colors.maroon,
               boxShadow: 'inset 0 0 20px 5px rgba(80, 0, 0, 0.55)'
             }}>
          <div className="absolute inset-0 rounded-full"
               style={{
                 background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0) 70%)'
               }}></div>
        </div>

        <div className="relative w-40 h-40 flex items-center justify-center">
          <img 
            src="/images/om_symbol.png" 
            alt="Om Symbol" 
            className="w-36 h-36 object-contain z-10"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))',
              animation: 'pulse-subtle 2s infinite ease-in-out'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.4) 0%, rgba(255, 215, 0, 0) 70%)',
              animation: 'pulse-glow 4s infinite ease-in-out alternate',
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center">
        <div className="w-64 h-1.5 rounded-full overflow-hidden mb-3" style={{ backgroundColor: 'rgba(139, 26, 26, 0.3)' }}>
          <div 
            className="h-full rounded-full"
            style={{ 
              width: `${loadingProgress}%`,
              transition: 'width 0.3s ease-out',
              background: `linear-gradient(90deg, ${colors.maroon}, ${colors.red}, ${colors.maroon})`,
              boxShadow: '0 0 10px rgba(139, 26, 26, 0.7)'
            }}
          />
        </div>
        <div className="font-semibold tracking-wider text-lg" 
          style={{ 
            color: colors.maroon, 
            textShadow: '0 0 5px rgba(255, 215, 0, 0.5)' 
          }}>
          {loadingProgress < 100 ? 'LOADING...' : 'KUMARRAN VILAS'}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spinning82341 {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-glow {
          0% { opacity: 0.5; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1.02); }
        }

        @keyframes pulse-subtle {
          0% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.03); filter: brightness(1.2); }
          100% { transform: scale(1); filter: brightness(1); }
        }

        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        .animate-spin-smooth {
          animation: spinning82341 2.5s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s infinite ease-in-out alternate;
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;