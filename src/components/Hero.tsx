"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf9f7] via-white to-[#fff5f8] z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#d63384]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1a3a5c]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <span className="inline-block bg-[#d63384]/10 text-[#d63384] px-4 py-2 rounded-full text-sm font-medium mb-6">
              votre secrétaire indépendante
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a3a5c] leading-tight mb-6">
              Trop d'administratif ? Pas assez de temps ?{" "}
              <span className="script-accent text-5xl md:text-6xl lg:text-7xl text-[#d63384]">Hello Assist</span> s'occupe de tout pour vous.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Passez la main... et <span className="script-accent text-3xl md:text-4xl text-[#d63384]">c'est fait.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#d63384] text-white px-8 py-4 rounded-full hover:bg-[#1a3a5c] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl group"
              >
                Demander un devis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-[#1a3a5c] text-[#1a3a5c] px-8 py-4 rounded-full hover:bg-[#1a3a5c] hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Découvrir mes services
              </a>
            </div>
          </motion.div>
          
          {/* Right content - Illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d63384]/20 to-[#f59e0b]/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img src="/image1.png" alt="Hello Assist" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;