import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [seeAll, setSeeAll] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const newProducts = Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      name: t(`products.product_${i + 1}`),
      featured: i < 4,
      index: i + 1,
    }));
    setProducts(newProducts);
  }, [t, i18n.language]);

  const visibleProducts = seeAll ? products : products.filter(p => p.featured);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="products">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-3"
          >
            {seeAll ? t("products.title_all") : t("products.title_catalog")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            {t("products.description")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.05 }}
                className="group relative"
              >
                <div 
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-zoom-in"
                  onClick={() => setSelected(p)}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={`/img/Product/${p.index}.jpg`}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <ZoomIn 
                        className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        title={t("products.zoom")} 
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-14">
          <button
            onClick={() => setSeeAll(!seeAll)}
            className="flex items-center gap-2 text-red-600 hover:text-white border border-red-500 hover:bg-red-500 transition-all px-6 py-2 rounded-full font-medium shadow-sm hover:shadow-md"
          >
            {seeAll ? <ArrowLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
            {seeAll ? t("products.see_featured") : t("products.see_all")}
          </button>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
              onClick={() => {
                setSelected(null);
                setIsZoomed(false);
              }}
            >
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title={t("products.zoom")}
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setSelected(null);
                    setIsZoomed(false);
                  }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title={t("products.close")}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="h-full flex items-center justify-center p-4"
              >
                <motion.img
                  src={`/img/Product/${selected.index}.jpg`}
                  alt={selected.name}
                  className={`max-w-full max-h-full object-contain cursor-zoom-in ${isZoomed ? 'scale-150' : 'scale-100'}`}
                  style={{ transition: 'transform 0.3s ease-out' }}
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Products;
