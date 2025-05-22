import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const exportGalleryItems = [
  {
    image: '/img/Export/Singapore.jpg',
    country: 'Singapore',
    flag: '🇸🇬',
    product: 'Singapore',
    date: '2024-11-02',
    container: '20ft',
  },
  {
    image: '/img/Export/Australia.jpg',
    country: 'Australia',
    flag: '🇦🇺',
    product: 'Australia',
    date: '2024-10-15',
    container: '40ft HC',
  },
  {
    image: '/img/Export/Taiwan.jpg',
    country: 'Taiwan',
    flag: '🇹🇼',
    product: 'Taiwan',
    date: '2024-12-20',
    container: '20ft',
  },
];

const Gallery = () => {
  const { t } = useTranslation(); // Using translation hook
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-tr from-white via-red-50 to-white" id="gallery">
      {/* Background elements */}
      <div className="absolute -top-20 -left-32 w-96 h-96 bg-red-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute -bottom-32 right-0 w-72 h-72 bg-red-200 rounded-full opacity-20 blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-3">
              {/* Optional: Add icon or other elements if necessary */}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">{t('gallery.title')}</h2>
            <p className="text-gray-500 text-sm mt-2">
              {t('gallery.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {exportGalleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.product}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow text-sm font-medium">
                  {item.flag} {item.country}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
