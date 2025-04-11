// Redesain komponen Contact dengan UI modern
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Alamat',
      text: 'Jl. Raya Industri No. 123, Cikupa, Tangerang'
    },
    {
      icon: <FaPhone />,
      title: 'Telepon',
      text: '+62 21 5940 0789'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      text: 'info@chandraputraputri.co.id'
    },
    {
      icon: <FaClock />,
      title: 'Jam Kerja',
      text: 'Senin - Sabtu: 08.00 - 17.00'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-emerald-800 to-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-emerald-900 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Mari Berbicara
                </h2>
                <p className="text-emerald-100 mb-8">
                  Kami siap membantu mewujudkan proyek impian Anda dengan solusi batu alam terbaik.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="bg-emerald-800/50 rounded-full p-3 text-amber-400">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{item.title}</h3>
                        <p className="text-emerald-100">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                  Kirim Pesan
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                        placeholder="Nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                      placeholder="Subjek pesan"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all resize-none"
                      placeholder="Tulis pesan Anda"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-800 hover:bg-emerald-700 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;