import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [seeAll, setSeeAll] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cancelTokenSource = useRef(null);

  useEffect(() => {
    cancelTokenSource.current = axios.CancelToken.source();

    axios.get('/products', { cancelToken: cancelTokenSource.current.token })
      .then(res => {
        setProducts(res.data.products);
        setError(null);
      })
      .catch(err => {
        if (!axios.isCancel(err)) {
          console.error('Failed to fetch products:', err);
          setError(t('products.error_loading')); // tambahkan kunci i18n di file bahasa
        }
      })
      .finally(() => {
        setLoading(false);
      });

    // Cleanup on unmount
    return () => {
      if (cancelTokenSource.current) {
        cancelTokenSource.current.cancel();
      }
    };
  }, [t]);

  // Close modal on ESC key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && selected) {
        setSelected(null);
        setIsZoomed(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

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

        {loading && (
          <div className="flex justify-center py-20">
            <div className="loader border-4 border-red-500 border-t-transparent rounded-full w-12 h-12 animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 font-semibold py-10">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
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
                          src={p.url}
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
          </>
        )}

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => {
                setSelected(null);
                setIsZoomed(false);
              }}
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
            >
              <div
                className="relative max-w-full max-h-full"
                onClick={e => e.stopPropagation()}
                tabIndex={0}
              >
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsZoomed(!isZoomed);
                    }}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title={t("products.zoom")}
                    aria-label={t("products.zoom")}
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
                    aria-label={t("products.close")}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <motion.img
                  src={selected.url}
                  alt={selected.name}
                  className={`max-w-full max-h-full object-contain cursor-zoom-in ${isZoomed ? 'scale-150' : 'scale-100'}`}
                  style={{ transition: 'transform 0.3s ease-out' }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .loader {
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Products;
