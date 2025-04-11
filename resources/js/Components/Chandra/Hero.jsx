import React from 'react';
import { motion } from 'framer-motion';
import { Star, Truck, Shield, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pattern-grid"></div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-5 py-2.5 rounded-full mb-6"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-medium">Supplier Batu Alam Terpercaya</span>

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Wujudkan Ruang Elegan
              <span className="text-red-600 block">dengan Batu Alam Berkualitas</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg mb-10 max-w-xl mx-auto lg:mx-0"
            >
             Pilihan terbaik untuk kebutuhan batu alam berkualitas, tahan lama, dan estetik.

            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-red-200 flex items-center justify-center gap-2 group">
               Lihat Koleksi
                <ChevronDown className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                { icon: Star, text: "Premium Quality" },
                { icon: Truck, text: "Fast Delivery" },
                { icon: Shield, text: "Guaranteed" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3 group">
                  <div className="bg-red-50 p-4 rounded-full text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-gray-600 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
           <div className="aspect-square rounded-3xl overflow-hidden bg-red-100 relative">
              {/* Overlay Gradient */}
              <div className="absolute z-10"></div>

              {/* Image */}
              <img
                src="/img/Hero/hero1.jpg" // Ganti ini dengan path gambar kamu
                alt="Batu Alam"
                className="w-full h-full object-cover"
              />
            </div>


            {/* Floating Elements */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -right-8 top-1/4 bg-white p-4 rounded-xl shadow-xl"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .pattern-grid {
          background-image: linear-gradient(90deg, rgba(0,0,0,.03) 1px, transparent 1px),
                          linear-gradient(rgba(0,0,0,.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Hero;