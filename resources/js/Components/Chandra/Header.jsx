import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('header')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Beranda', to: 'home' },
    { name: 'Tentang Kami', to: 'about' },
    { name: 'Produk', to: 'products' },
    { name: 'Layanan', to: 'services' },
    { name: 'Galeri', to: 'gallery' },
  ];

  const headerVariants = {
    hidden: { y: -100 },
    visible: { y: 0 }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 relative z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`relative h-12 w-12 overflow-hidden rounded-lg ${
              isScrolled ? 'shadow-md' : 'ring-2 ring-white/20'
            }`}>
              <img 
                src="/img/Logo/logo_sc.png" 
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-playfair font-bold text-lg md:text-xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              PT. Steven Cahaya SuksesIndo
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`relative px-2 py-1 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                      activeSection === item.to
                        ? 'text-red-600'
                        : isScrolled ? 'text-gray-900' : 'text-gray-600'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                      activeSection === item.to
                        ? 'scale-x-100 bg-red-600'
                        : 'scale-x-0 bg-current'
                    }`} />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className={`hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-red-600 text-white hover:bg-red-700 hover:text-white'
              }`}
            >
              Hubungi Kami
            </motion.a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
                isOpen || isScrolled ? 'text-red-600' : 'text-red-600'
              }`}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed inset-0 z-40 lg:hidden bg-white"
              >
                <div className="flex flex-col h-full p-8">
                  <div className="flex-1">
                    <ul className="space-y-6 pt-20">
                      {navItems.map((item, index) => (
                        <motion.li
                          key={item.to}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="block text-2xl font-medium text-gray-900 hover:text-red-600 transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="block w-full py-3 text-center text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Hubungi Kami
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;