"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Gérante de boutique",
    content:
      "Grâce à Hello Assist, j'ai enfin pu me libérer du stress administratif. Marie gère tout avec une efficacité remarquable !",
  },
  {
    name: "Pierre Martin",
    role: "Artisan indépendant",
    content:
      "Un accompagnement professionnel et chaleureux. Je recommande vivement pour tous les indépendants débordés.",
  },
  {
    name: "Association Les Petits Pas",
    role: "Présidente",
    content:
      "Hello Assist nous aide dans la gestion administrative de notre association. Un gain de temps précieux pour nos actions sur le terrain.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#d63384]/10 text-[#d63384] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            Ils me font{" "}
            <span className="script-accent text-5xl md:text-6xl">confiance</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez les retours d'expérience de mes clients satisfaits.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#faf9f7] to-white p-8 rounded-2xl shadow-md border border-gray-100 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-[#d63384] rounded-full flex items-center justify-center">
                <MessageCircle className="text-white" size={16} />
              </div>

              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#f59e0b] text-xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#1a3a5c]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
