import React from 'react';
import { motion } from 'framer-motion';
import { Store, Truck, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const handleAction = (actionType) => {
    if (actionType === 'scrollToProducts') {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    } else if (actionType === 'scrollToAbout') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (actionType === 'openWhatsApp') {
      const phoneNumber = '6281252223303'; // ganti dengan nomor WA kamu
      const message = encodeURIComponent('Halo, saya ingin konsultasi gratis');
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    }
  };

  const services = [
    {
      icon: <Store />,
      title: t('services.items.sale.title'),
      description: t('services.items.sale.description'),
      link: t('services.items.sale.link'),
      action: () => handleAction('scrollToProducts'),
      gradient: 'from-rose-500 to-red-600',
    },
    {
      icon: <Truck />,
      title: t('services.items.delivery.title'),
      description: t('services.items.delivery.description'),
      link: t('services.items.delivery.link'),
      action: () => handleAction('scrollToAbout'),
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      icon: <MessageSquare />,
      title: t('services.items.consultation.title'),
      description: t('services.items.consultation.description'),
      link: t('services.items.consultation.link'),
      action: () => handleAction('openWhatsApp'),
      gradient: 'from-emerald-500 to-green-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#f0f0f0_49%,#f0f0f0_51%,transparent_52%)] bg-[length:60px_60px] opacity-50" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12">
        {/* Header (Kiri) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
              {t('services.badge')}
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('services.headline.part1')}
            <span className="relative mx-2">
              <span className="relative z-10">{t('services.headline.highlight')}</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200/60" />
            </span>
            {t('services.headline.part2')}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Content (Kanan) */}
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group focus-within:ring-2 focus-within:ring-red-500 rounded-3xl"
                tabIndex={0}
                onClick={service.action}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') service.action();
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-3xl blur-sm -z-10"
                  style={{
                    background: `linear-gradient(to right, #ef4444, #f97316)`,
                  }}
                />
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="mb-6 md:mb-8 relative">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}
                      aria-label={service.title}
                    >
                      {service.icon}
                    </div>
                    <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-black/5 transform rotate-6 group-hover:rotate-0 transition-transform duration-300" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // biar tidak trigger onClick parent
                      service.action();
                    }}
                    className="inline-flex items-center text-red-600 hover:text-red-800 font-medium text-sm md:text-base"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    {service.link}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Reduced motion untuk aksesibilitas */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .transform,
          .transition-all {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
