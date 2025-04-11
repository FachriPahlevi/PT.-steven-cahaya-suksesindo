// Redesain komponen Testimonials dengan desain modern
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Kualitas batu alam dari PT. Chandra Putra Putri benar-benar premium. Proyek rumah kami terlihat sangat mewah dan elegan berkat sentuhan batu andesit pada bagian fasad.",
      name: "Budi Santoso",
      position: "Arsitek, Jakarta",
      rating: 5,
      image: null
    },
    {
      text: "Sangat puas dengan layanan dan produk dari PT. Chandra Putra Putri. Batu alam yang kami pesan untuk dinding belakang taman kami memberikan nuansa alami yang luar biasa.",
      name: "Siti Nurhaliza",
      position: "Pemilik Rumah, Bandung",
      rating: 5,
      image: null
    },
    {
      text: "Sudah 5 tahun berlangganan untuk berbagai proyek hotel dan resort kami. Konsistensi kualitas dan ketersediaan stok menjadi alasan utama kami terus bekerja sama.",
      name: "Hendry Wijaya",
      position: "Kontraktor, Bali",
      rating: 5,
      image: null
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-red-600 mb-6">
            Apa Kata Mereka?
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Testimoni dari pelanggan yang telah menggunakan produk dan layanan kami.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <FaQuoteRight className="text-red-600 text-2xl" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-xl" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-gray-800 text-center font-light italic mb-8">
                  "{testimonials[activeIndex].text}"
                </p>

                <div className="text-center">
                  <h4 className="font-semibold text-lg text-red-600 mb-1">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-12 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-red-600' : 'bg-red-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;