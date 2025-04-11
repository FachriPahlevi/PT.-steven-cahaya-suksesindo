import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMountain, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Beranda', to: 'home' },
    { name: 'Tentang Kami', to: 'about' },
    { name: 'Produk', to: 'products' },
    { name: 'Layanan', to: 'services' },
    { name: 'Galeri', to: 'gallery' },
    { name: 'Kontak', to: 'contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#" 
            className="flex items-center gap-3 relative z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`text-white h-11 w-11 flex items-center justify-center shadow-lg transition-all duration-300 ${isScrolled ? '' : 'ring-4 ring-white/20'}`}>
              <img src="/img/Logo/logo_sc.png" className="text-sm" />
            </div>
            <div className="font-playfair font-bold text-xl transition-colors duration-300">
              PT. Steven Cahaya SuksesIndo
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="uppercase tracking-wide text-sm font-medium hover:text-amber-400 cursor-pointer relative group transition-all duration-300 text-black"
                  >
                    <span>{item.name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center space-x-4">
            <motion.a 
              href="#contact" 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="hidden md:inline-block transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 rounded-full font-medium py-2 px-6 bg-red-600 hover:bg-red-700 text-white"
            >
              Hubungi Kami
            </motion.a>
            <button 
              className={`w-12 h-12 flex items-center justify-center rounded-full md:hidden z-30 transition-all ${
                isOpen 
                ? 'bg-white text-red-600' 
                : isScrolled ? 'text-red-600' : 'text-white'
              }`} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-red-600/95 backdrop-blur-md z-20 md:hidden"
              >
                <motion.nav 
                  className="h-full flex flex-col justify-center items-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <ul className="flex flex-col space-y-6 items-center">
                    {navItems.map((item, index) => (
                      <motion.li 
                        key={item.to}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="overflow-hidden"
                      >
                        <Link
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          className="text-white hover:text-amber-400 text-2xl font-medium relative transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.a 
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="mt-10 bg-white text-red-600 hover:bg-amber-400 py-3 px-8 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Hubungi Kami
                  </motion.a>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;