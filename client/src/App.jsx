import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/TempProductPage'; // Keep this as is if your file is named TempProductPage

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

  return (
    <Router>
      {!isLoading ? (
        // After transition is complete, render the app with routing normally
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductPage />} /> {/* Add this for product IDs */}
          {/* Add more routes here if needed */}
        </Routes>
      ) : (
        // During loading and transition, render both with animation
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
      )}
    </Router>
  );
}

export default App;