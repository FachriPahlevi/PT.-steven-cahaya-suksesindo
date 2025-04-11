// components/Services.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { FaStore, FaTruck, FaComments, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <FaStore />,
      title: 'Penjualan Batu Alam',
      description: 'Kami menyediakan berbagai jenis batu alam berkualitas tinggi seperti batu andesit, palimanan, batu templek, batu candi, dan banyak lagi.',
      link: 'Lihat Produk',
      to: 'products'
    },
    {
      icon: <FaTruck />,
      title: 'Pengiriman Nasional',
      description: 'Kami menyediakan layanan pengiriman cepat, aman, dan terpercaya ke seluruh wilayah Indonesia dengan armada yang terintegrasi.',
      link: 'Cek Area Pengiriman',
      to: 'contact'
    },
    {
      icon: <FaComments />,
      title: 'Konsultasi Proyek',
      description: 'Tim ahli kami siap membantu Anda memilih material batu alam terbaik yang sesuai dengan kebutuhan spesifik proyek Anda.',
      link: 'Konsultasi Gratis',
      to: 'contact'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-red-600/3 -top-[250px] -right-[200px] z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold font-playfair text-white mb-4 relative pb-4 inline-block before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-1 before:bg-amber-400">
            Layanan Kami
          </h2>
          <p className="text-gray-600">
            Kami menyediakan berbagai layanan profesional untuk memastikan kebutuhan batu alam Anda terpenuhi dengan sempurna.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>
              <div className="bg-red-600 text-white h-16 w-16 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                to={service.to} 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className="inline-flex items-center text-red-600 font-medium hover:text-amber-500 transition-all duration-300 group-hover:gap-3"
              >
                {service.link} <FaArrowRight className="ml-2 text-sm transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
