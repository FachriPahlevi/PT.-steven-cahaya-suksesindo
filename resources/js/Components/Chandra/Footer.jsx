// components/Footer.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { FaMountain, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Beranda', to: 'home' },
    { name: 'Tentang Kami', to: 'about' },
    { name: 'Produk', to: 'products' },
    { name: 'Layanan', to: 'services' },
    { name: 'Galeri', to: 'gallery' },
    { name: 'Kontak', to: 'contact' }
  ];

  const produkLinks = [
    { name: 'Batu Andesit', to: 'products' },
    { name: 'Batu Palimanan', to: 'products' },
    { name: 'Batu Candi', to: 'products' },
    { name: 'Batu Templek', to: 'products' },
    { name: 'Batu Marmer', to: 'products' }
  ];

  return (
    <footer className="bg-gray-900 text-white/80">
      <div className="container mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 text-white h-10 w-10 flex items-center justify-center rounded-lg">
                <FaMountain className="text-xl" />
              </div>
              <div className="font-playfair font-bold text-xl text-white">
                Chandra Putra Putri
              </div>
            </div>
            <p className="mb-6">
              PT. Chandra Putra Putri adalah perusahaan yang bergerak di bidang penjualan batu alam berkualitas tinggi untuk kebutuhan konstruksi dan dekorasi.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-10 before:h-0.5 before:bg-red-600">
              Link Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="inline-flex items-center hover:text-amber-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <FaChevronRight className="mr-2 text-xs" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h4 className="text-white font-semibold text-lg mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-10 before:h-0.5 before:bg-red-600">
              Produk Kami
            </h4>
            <ul className="space-y-3">
              {produkLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                    className="inline-flex items-center hover:text-amber-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <FaChevronRight className="mr-2 text-xs" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h4 className="text-white font-semibold text-lg mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-10 before:h-0.5 before:bg-red-600">
              Kontak Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-amber-400 mt-1" />
                <span>Gresik, Indonesia</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-amber-400 mt-1" />
                <span>+62 812 5222 3303</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-amber-400 mt-1" />
                <span>scs@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://www.devfachri.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            FachriDev
          </a>{" "}
          | Fullstack Engineer. Building scalable & smart digital solutions.
        </div>

      </div>
    </footer>
  );
};

export default Footer;