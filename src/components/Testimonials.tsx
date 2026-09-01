"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";

const googleReviews = [
  {
    name: "PIERRE",
    role: "Taxi indépendant",
    rating: 5,
    date: "il y a 3 mois",
    content:
      "En tant que taxi ayant récemment créé mon entreprise, j'ai fait appel à Hello Assist pour m'accompagner dans toute la partie administrative, et je suis vraiment satisfait.\n\nDe la création de mon activité à la mise en place des outils de gestion, tout a été clair, rapide et très bien organisé. J'ai particulièrement apprécié la disponibilité, l'écoute et les explications simples, surtout quand on n'est pas à l'aise avec l'administratif.\n\nAujourd'hui, je peux me concentrer sur mon travail en toute tranquillité, car je sais que mon administratif est bien suivi.\n\nJe recommande Hello Assist à tous les entrepreneurs, surtout ceux qui se lancent.",
  },
  {
    name: "Maeva Saintini",
    role: "Cliente satisfaite",
    rating: 5,
    date: "il y a 3 mois",
    content:
      "Bonsoir\nJe tiens à te remercier pour la rédaction de mes fiches. Ton travail est d'une grande qualité. On sent que tu as à cœur de fournir un travail soigné. C'était un gain de temps pour moi et c'est avec beaucoup plus de sérénité que je vais aborder mes examens.\n\nJ'ai particulièrement apprécié ta réactivité et ta rapidité à l'envoi du travail demandé.\n\nBonne soirée",
  },
  {
    name: "mizikannou",
    role: "Association Mizik An Nou",
    rating: 5,
    date: "il y a 3 mois",
    content:
      "L'association Mizik An Nou recommande vivement les services de Hello Assist pour son professionnalisme, sa réactivité et son sérieux.\n\nÉlodie, secrétaire indépendante et fondatrice de Hello Assist, nous accompagne efficacement dans la gestion administrative et l'organisation de nos projets associatifs, notamment autour de l'événement culturel « Biguine Chantée ».\n\nSon implication, son sens de l'organisation et sa capacité à gérer plusieurs missions avec rigueur ont été de véritables atouts pour notre association.\n\nNous apprécions particulièrement sa disponibilité, son accompagnement humain et son professionnalisme au quotidien.\n\nNous recommandons Hello Assist aux associations, professionnels et particuliers recherchant une assistance administrative sérieuse, organisée et de confiance.",
  },
  {
    name: "Malika Desvarieux",
    role: "Cliente fidèle",
    rating: 5,
    date: "il y a 3 mois",
    content:
      "Cela fait déjà 4 mois que j'ai fais confiance à hello assit et je ne regrette rien.\nElle gère toute ma partie administrative sans que je me soucie de rien.\nUn vrai gain de temps pour moi.",
  },
];

// Lien pour laisser un avis Google
const GOOGLE_REVIEW_LINK = "https://www.google.com/search?sa=X&sca_esv=ba1feb9f312c2a43&biw=1404&bih=743&sxsrf=APpeQnuwRTIr05uDAKZa70CUo_ZlBk_yWg:1788248382128&kgmid=/g/11nj1byl_z&q=Hello+Assist&shem=dlvs1,epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=0ad7c49b1e93bdb4&utm_source=dlvs1,epsd1,ltae,rimspwouoe,sh/x/loc/uni/m1/1";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

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
            Avis Google
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            Ils me font{" "}
            <span className="script-accent text-5xl md:text-6xl">confiance</span>
          </h2>
          
          {/* Google Rating Summary */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="text-5xl font-bold text-[#1a3a5c]">5,0</div>
              <div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{googleReviews.length} avis</p>
              </div>
            </div>
          </div>

          {/* Write Review Button */}
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#d63384] text-[#d63384] px-6 py-3 rounded-full hover:bg-[#d63384] hover:text-white transition-all duration-300 font-semibold"
          >
            <Star className="w-5 h-5" />
            Laisser un avis Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#faf9f7] to-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 relative"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(googleReviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>

            {/* Review Content */}
            <p className="text-gray-700 leading-relaxed mb-8 text-lg whitespace-pre-line">
              "{googleReviews[currentIndex].content}"
            </p>

            {/* Author */}
            <div className="border-t border-gray-200 pt-6">
              <p className="font-bold text-[#1a3a5c] text-xl">
                {googleReviews[currentIndex].name}
              </p>
              <p className="text-sm text-gray-500">
                {googleReviews[currentIndex].role} • {googleReviews[currentIndex].date}
              </p>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1a3a5c] hover:bg-[#d63384] hover:text-white transition-all duration-300"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1a3a5c] hover:bg-[#d63384] hover:text-white transition-all duration-300"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {googleReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#d63384] w-8" : "bg-gray-300"
                }`}
                aria-label={`Voir l'avis ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm text-gray-600 font-medium">
              Avis vérifiés sur Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;