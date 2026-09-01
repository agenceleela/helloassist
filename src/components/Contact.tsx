"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Merci pour votre message ! Je vous recontacterai dans les plus brefs délais.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#faf9f7] to-white">
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
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            Parlons de{" "}
            <span className="script-accent text-5xl md:text-6xl">votre projet</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Vous avez un projet ou une demande particulière ? N'hésitez pas à me
            contacter pour en discuter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#1a3a5c] mb-6">
                Mes coordonnées
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:contact@helloassist.fr"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d63384] to-[#f59e0b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-[#1a3a5c] font-medium">
                      contact@helloassist.fr
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+33691232905"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d63384] to-[#f59e0b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="text-[#1a3a5c] font-medium">06 91 23 29 05</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/33691232905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="text-[#1a3a5c] font-medium">
                      Discutons en direct
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional info */}
            <div className="bg-gradient-to-br from-[#1a3a5c] to-[#2d4a6f] p-8 rounded-2xl text-white">
              <h4 className="font-bold text-lg mb-4">Horaires d'ouverture</h4>
              <div className="space-y-2 text-white/90">
                <p>Lundi - Vendredi : 9h00 - 18h00</p>
                <p>Samedi : Sur rendez-vous</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#1a3a5c] mb-6">
                Envoyez-moi un message
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d63384] focus:ring-2 focus:ring-[#d63384]/20 outline-none transition-all duration-200"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d63384] focus:ring-2 focus:ring-[#d63384]/20 outline-none transition-all duration-200"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d63384] focus:ring-2 focus:ring-[#d63384]/20 outline-none transition-all duration-200 resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#d63384] to-[#f59e0b] text-white py-4 rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Envoyer mon message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
