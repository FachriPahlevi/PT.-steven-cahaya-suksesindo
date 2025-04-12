// components/Gallery.jsx
import React, { useState } from 'react';
import { FaImage, FaSearchPlus, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      size: 'large',
      title: 'Rumah Minimalis Modern',
      location: 'Batu Andesit, Jakarta Selatan',
      color: 'bg-gray-300'
    },
    {
      size: 'normal',
      title: 'Taman Resort',
      location: 'Batu Candi, Bali',
      color: 'bg-gray-200'
    },
    {
      size: 'normal',
      title: 'Dinding Interior',
      location: 'Batu Templek, Bandung',
      color: 'bg-gray-300'
    },
    {
      size: 'tall',
      title: 'Villa Mewah',
      location: 'Kombinasi Batu Alam, Yogyakarta',
      color: 'bg-gray-200'
    },
    {
      size: 'normal',
      title: 'Area Kolam Renang',
      location: 'Batu Palimanan, Surabaya',
      color: 'bg-gray-300'
    }
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'tall':
        return 'row-span-2';
      case 'wide':
        return 'col-span-2';
      default:
        return '';
    }
  };

  return (
    <section id="gallery" className="py-24 bg-red650 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold font-playfair text-red-600 mb-4 relative pb-4 inline-block before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-1 before:bg-amber-400">
            Galeri Proyek
          </h2>
          <p className="text-gray-600">
            Berikut adalah beberapa contoh proyek yang telah kami kerjakan menggunakan produk batu alam berkualitas kami.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-6">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${getSizeClasses(item.size)} ${item.color}`}
              onClick={() => setSelectedImage(item)}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={`/img/Proyek/${index+1}.jpg`} className="w-full h-full text-5xl text-gray-400 object-cover" />
                </div>
              <div className="absolute inset-0 bg-red-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaSearchPlus className="text-lg" />
                  </div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-white/90 text-sm">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md z-10 transition-all"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              <div className={`aspect-video flex items-center justify-center ${selectedImage.color}`}>
                <FaImage className="text-7xl text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
