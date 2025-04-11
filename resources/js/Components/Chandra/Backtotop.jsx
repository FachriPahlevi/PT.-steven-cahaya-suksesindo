

// components/BackToTop.jsx
import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-amber-400 hover:bg-emerald-800 hover:text-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
      aria-label="Back to top"
    >
      <FaChevronUp />
    </button>
  );
};

export default BackToTop;
