"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#25D366] to-[#128C7E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <MessageCircle className="text-[#25D366]" size={32} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                Rejoignez la chaîne WhatsApp de Hello Assist
              </h3>
              <p className="text-white/90">
                Restez informé(e) en temps réel de mes actualités et conseils
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/33691232905"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#25D366] px-8 py-4 rounded-full hover:bg-[#1a3a5c] hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            Rejoindre la chaîne
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppBanner;
