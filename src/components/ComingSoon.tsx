"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  ArrowRight,
  CheckCircle,
  Mail,
  Sparkles,
  FileText,
  Calendar,
  CheckSquare,
  Laptop,
} from "lucide-react";
import { FORMSPREE_NEWSLETTER } from "@/config";

const features = [
  { icon: FileText, label: "Vos démarches", bg: "bg-[#fbdce6]" },
  { icon: Calendar, label: "Votre organisation", bg: "bg-[#fbdce6]" },
  { icon: CheckSquare, label: "Votre gestion", bg: "bg-[#fbdce6]" },
  { icon: Laptop, label: "Plus de temps pour vous", bg: "bg-[#cfe0f4]" },
];

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_NEWSLETTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col bg-[#fffefe]">
      {/* ===== Patterns du fond ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-br from-[#fceff4] via-[#fdf3f6] to-[#fbe7ee]">
          <svg
            className="absolute bottom-0 left-0 w-full h-16 md:h-24 text-[#fffefe]"
            viewBox="0 0 1440 120"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0 60 C 360 120, 1080 0, 1440 80 L 1440 120 L 0 120 Z" />
          </svg>
        </div>
        <svg
          className="absolute top-[46%] -left-20 w-[55%] max-w-xl text-[#cfe0f4]"
          viewBox="0 0 600 160"
          fill="currentColor"
        >
          <path d="M0 60 C 150 10, 350 130, 600 50 L 600 110 C 350 190, 150 70, 0 120 Z" />
        </svg>
        <svg
          className="absolute top-[52%] -right-24 w-[55%] max-w-xl text-[#f9dce6]"
          viewBox="0 0 600 160"
          fill="currentColor"
        >
          <path d="M0 50 C 250 130, 450 10, 600 60 L 600 120 C 450 70, 250 190, 0 110 Z" />
        </svg>
        <svg
          className="absolute right-2 md:right-8 top-[56%] w-20 md:w-32 text-[#bcd7f0]"
          viewBox="0 0 120 260"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        >
          <path d="M60 250 C 70 180, 70 90, 60 10" />
          <path d="M60 50 C 30 30, 12 44, 16 70 C 44 74, 56 66, 60 50 Z" />
          <path d="M62 90 C 92 70, 110 84, 106 110 C 78 114, 66 106, 62 90 Z" />
          <path d="M60 140 C 30 120, 12 134, 16 160 C 44 164, 56 156, 60 140 Z" />
          <path d="M62 185 C 92 165, 110 179, 106 205 C 78 209, 66 201, 62 185 Z" />
        </svg>
        <svg
          className="absolute -bottom-10 -left-16 w-72 md:w-96 text-[#f9dce6]"
          viewBox="0 0 400 200"
          fill="currentColor"
        >
          <path d="M0 80 C 120 20, 260 140, 400 60 L 400 200 L 0 200 Z" />
        </svg>
        <svg
          className="absolute -bottom-12 -right-16 w-72 md:w-96 text-[#cfe0f4]"
          viewBox="0 0 400 200"
          fill="currentColor"
        >
          <path d="M0 60 C 140 140, 280 20, 400 80 L 400 200 L 0 200 Z" />
        </svg>
      </div>

      {/* ===== Contenu ===== */}
      <div className="relative z-10 flex flex-col flex-1 px-6 md:px-12 pt-4 pb-4 md:pt-6 md:pb-6 max-w-6xl mx-auto w-full">
        {/* Header : logo + bannière */}
        <div className="flex items-start justify-between gap-4 mb-4 md:mb-6">
          <img
            src="/logo.png"
            alt="Hello Assist"
            className="h-12 md:h-16 w-auto object-contain"
          />
          <span className="inline-flex items-center gap-2 bg-[#d9e7f8] text-[#1a3a5c] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-sm whitespace-nowrap mt-1">
            <Bell size={14} className="text-[#d63384]" fill="currentColor" />
            Ouverture prochaine
          </span>
        </div>

        {/* Slogan centré sur 2 lignes */}
        <div className="text-center mb-4 md:mb-6">
          <p className="text-2xl md:text-4xl font-bold text-[#1a3a5c] leading-tight">
            Passez la main...
          </p>
          <p className="script-accent text-3xl md:text-5xl leading-tight">et c'est fait !</p>
          <svg
            className="mt-1.5 w-28 md:w-40 mx-auto text-[#f3c3d4]"
            viewBox="0 0 220 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          >
            <path d="M6 9 C 60 3, 150 3, 214 8" />
          </svg>
        </div>

        {/* Pictos centrés en dessous du slogan */}
        <div className="grid grid-cols-4 gap-4 md:gap-10 justify-items-center max-w-md md:max-w-2xl mx-auto w-full mb-4 md:mb-6">
          {features.map((feature) => (
            <div key={feature.label} className="flex flex-col items-center text-center">
              <div
                className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-1.5 ${feature.bg}`}
              >
                <feature.icon className="text-[#1a3a5c]" size={18} strokeWidth={1.8} />
              </div>
              <p className="text-[10px] md:text-xs font-semibold text-[#1a3a5c] leading-snug max-w-[70px] md:max-w-[110px]">
                {feature.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bloc central : annonce + formulaire + sociaux */}
        <div className="text-center max-w-2xl mx-auto w-full flex-1 flex flex-col justify-center">
          <h1 className="text-xl md:text-3xl font-bold text-[#1a3a5c] leading-tight mb-2">
            Site internet
            <br />
            bientôt disponible
            <Sparkles
              className="inline-block ml-2 align-top text-[#e58bab]"
              size={22}
              fill="currentColor"
            />
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-4 max-w-lg mx-auto">
            Une nouvelle expérience arrive pour vous accompagner dans vos démarches
            administratives, votre organisation et votre gestion quotidienne.
          </p>

          {/* Formulaire connecté à Formspree */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-5 mb-4 text-left">
            {status === "success" ? (
              <div className="flex items-center justify-center gap-3 text-[#1a3a5c] font-semibold text-center text-sm md:text-base">
                <CheckCircle className="text-[#10b981] flex-shrink-0" size={20} />
                Merci ! Vous serez parmi les premières personnes informées du lancement.
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative flex-shrink-0">
                    <Mail className="text-[#1a3a5c]" size={24} strokeWidth={1.8} />
                    <Sparkles
                      className="text-[#d63384] absolute -top-2 -right-2.5"
                      size={12}
                      fill="currentColor"
                    />
                  </div>
                  <p className="font-bold text-[#1a3a5c] text-sm md:text-base leading-snug">
                    Soyez parmi les premières personnes informées du lancement
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="flex items-center gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    disabled={status === "sending"}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 bg-white text-sm md:text-base focus:border-[#d63384] focus:ring-2 focus:ring-[#d63384]/20 outline-none transition-all disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    aria-label="S'inscrire"
                    className="w-10 h-10 flex-shrink-0 rounded-full bg-[#d63384] text-white flex items-center justify-center hover:bg-[#1a3a5c] transition-colors duration-300 shadow-md disabled:opacity-60"
                  >
                    <ArrowRight size={16} />
                  </button>
                </form>
                {status === "error" && (
                  <p className="mt-2 text-xs text-red-500">
                    Oups, une erreur est survenue. Réessayez dans un instant.
                  </p>
                )}
              </>
            )}
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-4 mb-1.5 max-w-sm mx-auto w-full">
            <div className="flex-1 h-px bg-[#1a3a5c]/20"></div>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/helloassist971/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-[#1a3a5c] hover:bg-[#d63384] hover:text-white transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 4.03c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/elie-elodie/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-[#1a3a5c] hover:bg-[#d63384] hover:text-white transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="flex-1 h-px bg-[#1a3a5c]/20"></div>
          </div>
          <p className="text-xs text-gray-500 mb-2">@helloassist971</p>

          <p className="text-[10px] md:text-xs tracking-widest uppercase text-gray-400">
            Des gestes administratifs à de grands projets{" "}
            <span className="text-[#d63384]">♥</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;