// components/About.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { FaGem, FaAward, FaHandHoldingHeart, FaTruckLoading } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: <FaGem />,
      title: 'Kualitas Premium',
      description: 'Dipilih secara ketat untuk memastikan batu alam terbaik di kelasnya.',
    },
    {
      icon: <FaAward />,
      title: '15+ Tahun Pengalaman',
      description: 'Melayani kebutuhan proyek kecil hingga berskala nasional sejak 2010.',
    },
    {
      icon: <FaHandHoldingHeart />,
      title: 'Fokus pada Kepuasan',
      description: 'Kami hadir dengan pelayanan ramah, cepat, dan solutif.',
    },
    {
      icon: <FaTruckLoading />,
      title: 'Stok Selalu Tersedia',
      description: 'Pengiriman cepat & aman ke seluruh wilayah Indonesia.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute w-[300px] h-[300px] rounded-full bg-red-600/5 -top-[150px] -left-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl w-full bg-gray-200 aspect-square">
              <img 
                src="/img/About/about.jpg" 
                alt="Batu Alam" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-6 right-6 -z-10 w-full h-full border-4 border-amber-400 rounded-2xl"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold font-playfair text-red-600 mb-8 relative pb-4 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-20 before:h-1 before:bg-amber-400">
              Tentang Kami
            </h2>
            
            <p className="text-gray-600 mb-8">
              <strong>PT. Steven Cahaya SuksesIndo</strong> adalah perusahaan pemasok dan distributor <strong>batu alam berkualitas tinggi</strong> di Indonesia. Berdiri sejak tahun 2010, kami telah dipercaya oleh ribuan klien dari berbagai sektor,  mulai dari pemilik hunian pribadi hingga kontraktor dan arsitek profesional di seluruh nusantara.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-red-600 text-white h-12 w-12 min-w-12 rounded-full flex items-center justify-center text-xl shadow-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">{feature.title}</h5>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-medium transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-1 duration-300"
            >
              Konsultasi Gratis Sekarang
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
