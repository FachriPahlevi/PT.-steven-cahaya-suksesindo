import React from "react";
import { Globe2, Ship, Trophy, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const exportDestinations = [
    {
      country: t("about.exportDestinations.taiwan.country"),
      flag: "🇹🇼",
      desc: t("about.exportDestinations.taiwan.desc"),
      achievement: t("about.exportDestinations.taiwan.achievement"),
      stats: t("about.exportDestinations.taiwan.stats"),
    },
    {
      country: t("about.exportDestinations.australia.country"),
      flag: "🇦🇺",
      desc: t("about.exportDestinations.australia.desc"),
      achievement: t("about.exportDestinations.australia.achievement"),
      stats: t("about.exportDestinations.australia.stats"),
    },
    {
      country: t("about.exportDestinations.singapore.country"),
      flag: "🇸🇬",
      desc: t("about.exportDestinations.singapore.desc"),
      achievement: t("about.exportDestinations.singapore.achievement"),
      stats: t("about.exportDestinations.singapore.stats"),
    },
    {
      country: t("about.exportDestinations.indonesia.country"),
      flag: "🇮🇩",
      desc: t("about.exportDestinations.indonesia.desc"),
      achievement: t("about.exportDestinations.indonesia.achievement"),
      stats: t("about.exportDestinations.indonesia.stats"),
    },
  ];

  const achievements = [
    {
      icon: Globe2,
      value: "3+",
      text: t("about.achievements.countries"),
    },
    {
      icon: Ship,
      value: "2200+",
      text: t("about.achievements.exportVolume"),
    },
    {
      icon: Trophy,
      value: "15+",
      text: t("about.achievements.exportYears"),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" id="about">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium mb-4"
                >
                  <Ship className="w-4 h-4" />
                  {t("about.exporter")}
                </motion.div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("about.title")}</h2>
                <div className="h-1 w-20 bg-red-600 rounded-full mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
  {t("about.introduction.full", {
    year: 2010,
    company: "PT. Steven Cahaya SuksesIndo",
  })}
</p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">{t("about.achievements.title")}</h3>
                </div>
                <p className="text-lg leading-relaxed opacity-90">
                  {t("about.exportPartnerTrust")}
                </p>
              </motion.div>

              <div className="grid grid-cols-3 gap-6">
                {achievements.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-red-600 mb-4">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-2xl text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.text}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {exportDestinations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-3 bg-gradient-to-l from-red-50 to-transparent text-red-600 text-sm font-medium">
                    {item.stats}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{item.flag}</span>
                    <h3 className="text-xl font-bold text-gray-900">{item.country}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{item.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-red-600">
                    <Trophy className="w-4 h-4" />
                    {item.achievement}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
