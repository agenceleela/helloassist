"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Newspaper, Lightbulb, Tag, Calendar } from "lucide-react";

// Composant animé basé sur Link de Next.js
const MotionLink = motion(Link);

const blogCategories = [
  {
    icon: Newspaper,
    title: "Actualités",
    description: "Les dernières nouvelles de Hello Assist et du secteur",
    color: "from-[#1a3a5c] to-[#2d4a6f]",
    href: "#blog", // Placeholder - à remplacer quand la page sera créée
  },
  {
    icon: Lightbulb,
    title: "Conseils pratiques",
    description: "Astuces et bonnes pratiques pour votre gestion administrative",
    color: "from-[#d63384] to-[#c02772]",
    href: "/conseils-pratiques",
  },
  {
    icon: Tag,
    title: "Offres & nouveautés",
    description: "Découvrez mes nouvelles prestations et offres spéciales",
    color: "from-[#f59e0b] to-[#d97706]",
    href: "#blog", // Placeholder - à remplacer quand la page sera créée
  },
  {
    icon: Calendar,
    title: "Événements & ateliers",
    description: "Participez à mes ateliers et rencontres professionnelles",
    color: "from-[#10b981] to-[#059669]",
    href: "#blog", // Placeholder - à remplacer quand la page sera créée
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#f59e0b]/10 text-[#f59e0b] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Actualités / Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            Restez{" "}
            <span className="script-accent text-4xl">informé(e)</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez mes articles, conseils et actualités pour vous aider dans
            votre gestion administrative au quotidien.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogCategories.map((category, index) => (
            <MotionLink
              key={category.title}
              href={category.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl text-white hover:shadow-xl transition-all duration-300 group block`}
            >
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <category.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-white/80 leading-relaxed">
                {category.description}
              </p>
              <div className="mt-6 flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Découvrir</span>
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;