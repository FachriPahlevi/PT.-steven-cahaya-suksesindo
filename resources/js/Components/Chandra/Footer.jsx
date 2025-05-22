import React from 'react';
import { Link } from 'react-scroll';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('footer.home'), to: 'home' },
    { name: t('footer.about'), to: 'about' },
    { name: t('footer.products'), to: 'products' },
    { name: t('footer.services'), to: 'services' },
    { name: t('footer.gallery'), to: 'gallery' },
    { name: t('footer.contact'), to: 'contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white/80">
      <div className="container mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/img/Logo/logo_sc.png" alt="Logo" className="h-10" />
              <h2 className="text-xl font-bold text-white font-playfair">
                {t('footer.brand')}
              </h2>
            </div>
            <p className="leading-relaxed text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Kontak Kami */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-red-600 pb-2 inline-block">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-amber-400 mt-1" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-amber-400 mt-1" />
                <span>{t('footer.phone')}</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-amber-400 mt-1" />
                <span>{t('footer.email')}</span>
              </li>
            </ul>
          </div>

          {/* Link Cepat */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-red-600 pb-2 inline-block">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="inline-flex items-center hover:text-amber-400 transition-all duration-300 hover:translate-x-1 cursor-pointer"
                  >
                    <FaChevronRight className="mr-2 text-xs" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lokasi Kami */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-red-600 pb-2 inline-block">
              {t('footer.location')}
            </h4>
            <div className="w-full h-48 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.728231797462!2d112.5664686!3d-7.271734999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78013bfd5cb637%3A0x393128b1edd04f55!2sBatu%20alam%20indonesia%20SCS!5e0!3m2!1sid!2sid!4v1745954519065!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
