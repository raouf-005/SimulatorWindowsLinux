"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Positions fixes pour éviter les erreurs d'hydratation
const PARTICLES = [
  { left: "5%", top: "10%", delay: 0 },
  { left: "15%", top: "25%", delay: 0.2 },
  { left: "25%", top: "15%", delay: 0.4 },
  { left: "35%", top: "30%", delay: 0.6 },
  { left: "45%", top: "5%", delay: 0.8 },
  { left: "55%", top: "20%", delay: 1 },
  { left: "65%", top: "35%", delay: 0.1 },
  { left: "75%", top: "10%", delay: 0.3 },
  { left: "85%", top: "25%", delay: 0.5 },
  { left: "95%", top: "15%", delay: 0.7 },
  { left: "10%", top: "50%", delay: 0.9 },
  { left: "20%", top: "60%", delay: 0.15 },
  { left: "30%", top: "70%", delay: 0.35 },
  { left: "40%", top: "55%", delay: 0.55 },
  { left: "50%", top: "75%", delay: 0.75 },
  { left: "60%", top: "50%", delay: 0.95 },
  { left: "70%", top: "65%", delay: 0.05 },
  { left: "80%", top: "55%", delay: 0.25 },
  { left: "90%", top: "45%", delay: 0.45 },
  { left: "8%", top: "80%", delay: 0.65 },
  { left: "18%", top: "90%", delay: 0.85 },
  { left: "28%", top: "85%", delay: 0.12 },
  { left: "38%", top: "75%", delay: 0.32 },
  { left: "48%", top: "90%", delay: 0.52 },
  { left: "58%", top: "80%", delay: 0.72 },
  { left: "68%", top: "70%", delay: 0.92 },
  { left: "78%", top: "85%", delay: 0.08 },
  { left: "88%", top: "75%", delay: 0.28 },
  { left: "98%", top: "65%", delay: 0.48 },
  { left: "3%", top: "40%", delay: 0.68 },
];

export function IntroScreen({ onStart }) {
  const [step, setStep] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const introSteps = [
    {
      icon: "🌍",
      title: "Chaque année...",
      text: "400 millions d'ordinateurs sont jetés à cause de l'obsolescence programmée.",
    },
    {
      icon: "💰",
      title: "Les administrations françaises...",
      text: "Dépensent des milliards en licences Microsoft, alors qu'une alternative gratuite existe.",
    },
    {
      icon: "🐧",
      title: "La Gendarmerie Nationale...",
      text: "A migré 37 000 postes vers Linux. Résultat : 2 millions €/an d'économies.",
    },
  ];

  useEffect(() => {
    if (step < introSteps.length) {
      const timeout = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 1800); // PLUS RAPIDE - 1.8 secondes
      return () => clearTimeout(timeout);
    } else {
      setShowButton(true);
    }
  }, [step, introSteps.length]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1a] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Particules avec positions fixes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/40 rounded-full"
            style={{ left: particle.left, top: particle.top }}
            animate={{
              y: [0, -15, 15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Logo NIRD */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center z-10"
      >
        <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-2">
          L&apos;Écran Bleu de la Libération
        </h1>
        <p className="text-gray-400 text-base">
          Une expérience interactive par le mouvement NIRD
        </p>
      </motion.div>

      {/* Steps */}
      <div className="max-w-xl w-full z-10 min-h-[180px]">
        <AnimatePresence mode="wait">
          {introSteps.map(
            (item, index) =>
              index < step && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: index < step - 1 ? 0.4 : 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 mb-4"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.text}</p>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Bouton Start - SUPER ATTRACTIF */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
            className="mt-4 z-10"
          >
            <motion.button
              onClick={onStart}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(236, 72, 153, 0.5)",
                  "0 0 50px rgba(236, 72, 153, 0.9)",
                  "0 0 20px rgba(236, 72, 153, 0.5)",
                ],
              }}
              transition={{
                boxShadow: { duration: 1.2, repeat: Infinity },
              }}
              className="relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-2xl text-white text-xl font-bold overflow-hidden cursor-pointer"
            >
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span>LANCER LA SIMULATION</span>
                <span className="text-2xl">💥</span>
              </span>
            </motion.button>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center text-gray-400 text-sm mt-3"
            >
              Préparez-vous à vivre l&apos;enfer Windows... 😈
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={onStart}
        className="absolute bottom-4 right-4 text-gray-500 hover:text-white text-sm underline z-20 cursor-pointer"
      >
        Passer l&apos;intro →
      </motion.button>

      {/* Nuit de l'Info badge */}
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white text-xs">
        🌙 Nuit de l&apos;Info 2025
      </div>

      {/* Indicateur de progression */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {introSteps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index < step ? "bg-blue-500 w-4" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default IntroScreen;
