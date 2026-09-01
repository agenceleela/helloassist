"use client";

import { motion } from "framer-motion";
import { Building2, User, Heart } from "lucide-react";

const targetAudience = [
  {
    icon: Building2,
    title: "TPE",
    description:
      "Petites entreprises qui ont besoin d'un soutien administratif flexible et adapté à leur croissance.",
  },
  {
    icon: User,
    title: "Indépendants",
    description:
      "Freelances, artisans, commerçants... Déléguez l'administratif et concentrez-vous sur vos clients.",
  },
  {
    icon: Heart,
    title: "Associations",
    description:
      "Structures associatives qui nécessitent une gestion administrative rigoureuse avec un budget maîtrisé.",
  },
];

const TargetAudience = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a3a5c] to-[#2d4a6f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Pour qui ?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            J'accompagne{" "}
            <span className="script-accent text-5xl md:text-6xl">tous les profils</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Que vous soyez une petite entreprise, un travailleur indépendant ou
            une association, je m'adapte à vos besoins spécifiques.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {targetAudience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#d63384] to-[#f59e0b] rounded-full flex items-center justify-center mb-6 mx-auto">
                <item.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">
                {item.title}
              </h3>
              <p className="text-white/80 text-center leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
