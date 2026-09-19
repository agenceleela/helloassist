"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, ArrowRight, CheckCircle } from "lucide-react";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf9f7] via-white to-[#fff5f8] z-0"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#d63384]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1a3a5c]/5 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        {/* Vrai logo */}
        <img
          src="/logo.png"
          alt="Hello Assist"
          className="h-24 md:h-32 w-auto object-contain mx-auto mb-8"
        />

        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-[#d63384]/10 text-[#d63384] px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Bell size={16} />
          Ouverture prochaine
        </span>

        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a5c] leading-tight mb-4">
          Site internet bientôt disponible
        </h1>

        {/* Slogan (même police que le hero) */}
        <p className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-6">
          Passez la main...{" "}
          <span className="script-accent text-4xl md:text-5xl">et c'est fait !</span>
        </p>

        <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
          Une nouvelle expérience arrive pour vous accompagner dans vos démarches
          administratives, votre organisation et votre gestion quotidienne.
        </p>

        {/* Collecte d'e-mails */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-10">
          {subscribed ? (
            <div className="flex items-center justify-center gap-3 text-[#1a3a5c] font-semibold">
              <CheckCircle className="text-[#10b981] flex-shrink-0" size={24} />
              Merci ! Vous serez parmi les premières personnes informées du lancement.
            </div>
          ) : (
            <>
              <p className="font-semibold text-[#1a3a5c] mb-4">
                Soyez parmi les premières personnes informées du lancement
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre e-mail"
                  className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:border-[#d63384] focus:ring-2 focus:ring-[#d63384]/20 outline-none transition-all"
                />
                <button
                  type="submit"
                  aria-label="S'inscrire"
                  className="inline-flex items-center justify-center bg-[#d63384] text-white px-6 py-3 rounded-full hover:bg-[#1a3a5c] transition-colors duration-300 font-semibold"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            </>
          )}
        </div>

        {/* Réseaux sociaux */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <a
            href="https://www.instagram.com/helloassist971/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 bg-white shadow-md rounded-full flex items-center justify-center text-[#1a3a5c] hover:bg-[#d63384] hover:text-white transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 4.03c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/elie-elodie/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 bg-white shadow-md rounded-full flex items-center justify-center text-[#1a3a5c] hover:bg-[#d63384] hover:text-white transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <p className="text-sm text-gray-500 mb-8">@helloassist971</p>

        {/* Tagline */}
        <p className="text-xs tracking-widest uppercase text-gray-400">
          Des gestes administratifs à de grands projets{" "}
          <span className="text-[#d63384]">♥</span>
        </p>
      </motion.div>
    </section>
  );
};

export default ComingSoon;