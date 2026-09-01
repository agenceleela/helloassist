"use client";

import { motion } from "framer-motion";
import {
  FileText,
  FileCheck,
  FolderOpen,
  Calendar,
  Lightbulb,
  PartyPopper,
  Users,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Gestion administrative",
    description:
      "Courriers, classements, saisie de données... Je m'occupe de votre administratif quotidien pour que vous puissiez vous concentrer sur votre cœur de métier.",
  },
  {
    icon: FileCheck,
    title: "Création et suivi de facturation",
    description:
      "Établissement de devis et factures, relances clients, suivi des paiements. Une gestion rigoureuse pour une trésorerie saine.",
  },
  {
    icon: FolderOpen,
    title: "Organisation et classement",
    description:
      "Mise en place de systèmes de classement efficaces, numériques ou physiques. Retrouvez vos documents en un clin d'œil.",
  },
  {
    icon: Calendar,
    title: "Gestion d'agenda",
    description:
      "Prise de rendez-vous, organisation de votre emploi du temps, rappels. Optimisez votre temps et ne manquez plus rien.",
  },
  {
    icon: Lightbulb,
    title: "Aide à la création d'entreprise",
    description:
      "Accompagnement dans vos démarches de création, constitution de dossiers, recherches administratives. Donnez vie à votre projet en toute sérénité.",
  },
  {
    icon: PartyPopper,
    title: "Accompagnement pour vos événements",
    description:
      "Organisation logistique, gestion des invitations, coordination avec les prestataires. Réussissez vos événements sans stress.",
  },
  {
    icon: Users,
    title: "Suivi pour TPE, indépendants et associations",
    description:
      "Un accompagnement sur mesure adapté à vos besoins spécifiques. Une solution flexible et personnalisée pour chaque structure.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
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
            Mes prestations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            Des services adaptés à{" "}
            <span className="script-accent text-5xl md:text-6xl">vos besoins</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez l'ensemble des services que je propose pour vous libérer
            des tâches administratives et vous permettre de vous concentrer sur
            l'essentiel.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#faf9f7] to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#d63384] to-[#f59e0b] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
