"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

const GoogleMap = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#faf9f7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#1a3a5c]/10 text-[#1a3a5c] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Localisation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            Retrouvez-nous{" "}
            <span className="script-accent text-5xl md:text-6xl">au Moule</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hello Assist est basée au Moule, en Guadeloupe. Venez nous rencontrer ou contactez-nous à distance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#d63384] to-[#f59e0b] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c] mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    23 Rue Gaston Monnerville<br />
                    Le Moule 97160<br />
                    Guadeloupe
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1a3a5c] to-[#2d4a6f] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c] mb-2">Horaires</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Lundi - Vendredi : 9h00 - 18h00</p>
                    <p>Samedi : Sur rendez-vous</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=23+Rue+Gaston+Monnerville,+Le+Moule+97160,+Guadeloupe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1a3a5c] text-white px-6 py-4 rounded-2xl hover:bg-[#d63384] transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              <Navigation size={20} />
              Itinéraire Google Maps
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 h-full min-h-[400px]">
              <iframe
                src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.150107805556!2d-61.35112872507579!3d16.333924332297908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c1335f0b0f6f5cd%3A0x29d9c812566819e1!2sHello%20Assist!5e1!3m2!1sfr!2sfr!4v1788285947868!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px', minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Hello Assist - Le Moule, Guadeloupe"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;