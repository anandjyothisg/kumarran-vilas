import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import HomePage from './components/HomePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    // First start loading for ~3 seconds
    const loadingTimer = setTimeout(() => {
      // Trigger the transition animation
      setShowTransition(true);
      
      // After the transition animation completes, show the HomePage
      const transitionTimer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // Animation duration
      
      return () => clearTimeout(transitionTimer);
    }, 3000); // Initial loading time

    return () => clearTimeout(loadingTimer);
  }, []);

  if (!isLoading) {
    // After transition is complete, render just the HomePage normally
    return <HomePage />;
  }

  // During loading and transition, render both with animation
  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 w-full h-full">
        <div 
          className={`absolute inset-0 z-10 transition-transform duration-800 ease-in-out ${
            showTransition ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          <LoadingPage />
        </div>
        
        <div 
          className={`absolute inset-0 transition-transform duration-800 ease-in-out ${
            showTransition ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="w-full h-full">
            <HomePage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;