import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaChevronRight, FaArrowUp, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewAllProducts, setViewAllProducts] = useState(false);
  const productsRef = useRef(null);
  const allProductsRef = useRef(null);
  
  // Simplified product data structure without specific product names and descriptions
  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    featured: i < 4, // First 4 items are featured
    index: i + 1
  }));

  const featuredProducts = products.filter(product => product.featured);
  const displayedProducts = viewAllProducts ? products : featuredProducts;

  // Handle scroll effect after state updates
  useEffect(() => {
    if (viewAllProducts && allProductsRef.current) {
      // Add small delay to ensure layout has updated
      const timer = setTimeout(() => {
        // Scroll with offset to prevent header overlap
        // window.scrollTo({
        //   top: allProductsRef.current.offsetTop - 100,
        //   behavior: 'smooth'
        // });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [viewAllProducts]);

  const toggleViewAll = () => {
    setViewAllProducts(!viewAllProducts);
  };
  
  const openProductDetail = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProductDetail = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };
  
  const handleWhatsApp = (productId) => {
    const message = encodeURIComponent(`Halo, saya tertarik dengan produk batu alam, Boleh saya mendapatkan informasi lebih lanjut?`);
    window.open(`https://api.whatsapp.com/send?phone=+6281234567890&text=${message}`, '_blank');
  };

  return (
    <section id="products" ref={productsRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div id="products-header" className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold font-playfair text-red-600 mb-4 relative"
            >
              <span className="relative inline-block">
                {viewAllProducts ? "Semua Produk" : "Produk Unggulan"}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-400"></span>
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-xl"
            >
              Kami menyediakan berbagai jenis produk berkualitas untuk memenuhi kebutuhan proyek bangunan dan dekorasi Anda.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {!viewAllProducts ? (
              <button 
                onClick={toggleViewAll}
                className="inline-flex items-center bg-white hover:bg-red-600 hover:text-white text-red-600 py-3 px-8 rounded-full font-medium transition-all shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                Lihat Semua
                <FaChevronRight className="ml-2" />
              </button>
            ) : null}
          </motion.div>
        </div>
        
        <div id="allProducts" ref={allProductsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {displayedProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
                className="group relative"
                layout
              >
                <div 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                  onClick={() => openProductDetail(product)}
                >
                  <div className={`relative h-64 ${index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'} overflow-hidden`}>
                    {/* Product Image */}
                    <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
                      <img 
                        src={`/img/Product/${product.index}.jpg`} 
                        alt={`Produk ${product.id}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-red-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <span className="bg-white text-red-600 hover:bg-red-600 hover:text-white font-medium py-2 px-5 rounded-full transition-all transform hover:scale-105 duration-300">
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {viewAllProducts && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-16"
          >
            <button 
              onClick={toggleViewAll}
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <FaArrowUp className="mr-2" />
              Tampilkan Sebagian
            </button>
          </motion.div>
        )}
      </div>
      
      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={closeProductDetail}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={`/img/Product/${selectedProduct.index}.jpg`} 
                  alt={`Produk ${selectedProduct.id}`}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
                <div className="flex justify-end items-start mb-4">
                  <button 
                    onClick={closeProductDetail}
                    className="text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
                <div className="mt-auto space-y-3">
                  <button 
                    onClick={() => handleWhatsApp(selectedProduct.id)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp size={20} />
                    Hubungi via WhatsApp
                  </button>
                  
                  <button 
                    onClick={closeProductDetail}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg font-medium transition-all"
                  >
                    Kembali
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;