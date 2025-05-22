import React from "react";
import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation(); // Use i18next hook for translations

  return (
    <section id="home" className="min-h-screen bg-white flex items-center overflow-hidden relative">
      <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="text-red-600 font-semibold uppercase tracking-wide mb-4">
            {t('hero.stone_for_interiors')}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {t('hero.bring_natural_luxury')} <span className="text-red-600">{t('hero.natural_luxury')}</span> {t('hero.to_every_corner_of_your_room')}
          </h1>
          <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto lg:mx-0">
            {t('hero.we_believe')} {t('hero.stone_is_not_just_material')} {t('hero.it_is_nature_s_artwork')} {t('hero.enriching_your_room_character')}
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-md transition">
              {t('hero.explore_our_products')}
            </button>
          </div>

          {/* Testimonial Badge */}
          <div className="mt-10 flex justify-center lg:justify-start">
            <div className="bg-gray-100 px-6 py-3 rounded-xl shadow-inner text-sm text-gray-700 flex items-center gap-3">
              <UserCheck className="w-8 h-8 rounded-full" />
              <span>
                {t('hero.trusted_500_clients')}
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
            <img
              src="/img/Hero/generate.png"
              alt="Batu Alam"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent"></div>
          </div>

          {/* Floating Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-6 left-6 bg-white p-4 rounded-2xl shadow-xl max-w-[220px] text-sm"
          >
            <p className="font-semibold text-gray-800">{t('hero.natural_stone_100')}</p>
            <p className="text-gray-500 mt-1">
              {t('hero.processed_directly_from_mines')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
