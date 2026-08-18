"use client";

import { motion } from "framer-motion";
import { User, Heart, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Bienveillance",
    description: "Un accompagnement humain et personnalisé, à l'écoute de vos besoins.",
  },
  {
    icon: Award,
    title: "Professionnalisme",
    description: "Un travail rigoureux et discret, dans le respect des délais.",
  },
  {
    icon: Lightbulb,
    title: "Flexibilité",
    description: "Des solutions adaptées à votre rythme et à vos contraintes.",
  },
  {
    icon: User,
    title: "Proximité",
    description: "Une relation de confiance basée sur l'échange et la transparence.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#faf9f7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d63384]/20 to-[#f59e0b]/20 rounded-3xl transform -rotate-6"></div>
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#1a3a5c]/20 to-[#d63384]/20 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#d63384] to-[#f59e0b] rounded-full flex items-center justify-center">
                    <User className="text-white" size={64} />
                  </div>
                  <p className="text-[#1a3a5c] font-semibold text-lg">
                    Votre photo ici
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Espace réservé pour votre portrait professionnel
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#1a3a5c]/10 text-[#1a3a5c] px-4 py-2 rounded-full text-sm font-medium mb-4">
              À propos
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-6">
              Bonjour, je suis{" "}
              <span className="script-accent text-4xl">Elodie</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Secrétaire indépendante passionnée, j'ai créé Hello Assist avec une
              conviction profonde : chaque entrepreneur mérite de se concentrer
              sur ce qu'il fait de mieux, sans être submergé par l'administratif.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Avec plusieurs années d'expérience en gestion administrative,
              j'accompagne aujourd'hui TPE, indépendants et associations dans
              toutes leurs démarches, avec rigueur et bienveillance.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#d63384] to-[#f59e0b] rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a3a5c]">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
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
