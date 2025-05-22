import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaBox, FaFileInvoice, FaShippingFast } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const icons = [
  <FaClipboardList size={24} className="text-white" />,
  <FaFileInvoice size={24} className="text-white" />,
  <FaBox size={24} className="text-white" />,
  <FaShippingFast size={24} className="text-white" />,
];

const colors = [
  { color: 'bg-red-600', accent: 'border-red-600' },
  { color: 'bg-yellow-400', accent: 'border-yellow-400' },
  { color: 'bg-orange-500', accent: 'border-orange-500' },
  { color: 'bg-blue-500', accent: 'border-blue-500' },
];

const HowWeExport = () => {
  const { t } = useTranslation();
  const steps = t('how_we_export.steps', { returnObjects: true });

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Kiri: Konten Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className={`relative bg-white shadow-md rounded-2xl p-6 border-l-4 ${colors[idx].accent}`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${colors[idx].color}`}>
                {icons[idx]}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 hidden sm:block">
                  <div className="w-10 h-1 bg-gray-300"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Kanan: Header */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 relative"
          >
            {t('how_we_export.title')}
            <span className="block w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-400 mt-2 rounded"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 leading-relaxed"
          >
            {t('how_we_export.description')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HowWeExport;
