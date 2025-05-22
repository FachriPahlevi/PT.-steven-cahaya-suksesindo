import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import en from '../../i18n/en.json'; // Direct import
import id from '../../i18n/id.json'; // Direct import

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('header')) {
        setIsOpen(false);
      }
      if (isLangOpen && !event.target.closest('.lang-dropdown')) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, isLangOpen]);

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
    { name: t('header.nav.home'), to: 'home' },
    { name: t('header.nav.about'), to: 'about' },
    { name: t('header.nav.products'), to: 'products' },
    { name: t('header.nav.services'), to: 'services' },
    { name: t('header.nav.gallery'), to: 'gallery' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  const headerVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-gradient-to-b from-white/90 to-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo dan Nama Perusahaan */}
          <motion.div
            className="flex items-center gap-3 relative z-30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`relative h-12 w-12 overflow-hidden rounded-lg ${isScrolled ? 'shadow-md' : 'ring-2 ring-red-200/50'}`}>
              <img
                src="/img/Logo/logo_sc.png"
                alt={t('header.company.name')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-playfair font-bold text-lg md:text-xl transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                {t('header.company.name')}
              </span>
              <span className={`text-xs md:text-sm font-medium tracking-wide ${isScrolled ? 'text-red-600' : 'text-red-600'}`}>
                {t('header.company.tagline')}
              </span>
            </div>
          </motion.div>

          {/* Navigasi Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
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
                    className={`relative px-2 py-1 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${activeSection === item.to ? 'text-red-600' : isScrolled ? 'text-gray-900 hover:text-red-600' : 'text-gray-900 hover:text-red-600'}`}
                    aria-current={activeSection === item.to ? 'page' : undefined}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform origin-left transition-transform duration-300 ${activeSection === item.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Tombol CTA dan Language Toggle */}
          <div className="flex items-center gap-4 relative">
            {/* Language Dropdown */}
            <div className="relative lang-dropdown">
              <motion.button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isScrolled ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-red-100 text-red-600 hover:bg-red-200'}`}
                aria-label={t('header.language.toggle')}
                aria-expanded={isLangOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={16} />
                <span>{languages.find(lang => lang.code === i18n.language)?.flag || '🌐'}</span>
              </motion.button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 z-50"
                  >
                    <ul className="py-2">
                      {languages.map((lang) => (
                        <li key={lang.code}>
                          <button
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${i18n.language === lang.code ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-900 hover:bg-gray-100'}`}
                            aria-label={t('header.language.select', { name: lang.name })}
                          >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tombol CTA */}
            <motion.a
              href="https://wa.me/6281252223303"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className={`hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${isScrolled ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-600 text-white hover:bg-red-700'}`}
              aria-label={t('header.cta')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('header.cta')}
            </motion.a>

            {/* Tombol Menu Mobile */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${isOpen || isScrolled ? 'text-red-600 bg-gray-100' : 'text-red-600'}`}
              aria-label={isOpen ? t('header.close_menu') : t('header.open_menu')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
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
                        aria-current={activeSection === item.to ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{t('header.language.title')}</h3>
                  <ul className="space-y-2">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full flex items-center gap-2 px-4 py-2 text-sm rounded-md ${i18n.language === lang.code ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-900 hover:bg-gray-100'}`}
                          aria-label={t('header.language.select', { name: lang.name })}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <motion.a

                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block w-full py-3 text-center text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
                aria-label={t('header.cta')}
              >
                {t('header.cta')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reduced motion untuk aksesibilitas */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .transform,
          .transition-all,
          .motion-* {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;