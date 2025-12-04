"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      text: "A migré 37 000 postes vers Linux. Résultat : 2 millions €/an d'économies et zéro ransomware.",
    },
    {
      icon: "🎮",
      title: "Cette simulation interactive...",
      text: "Vous fait vivre la différence entre un système propriétaire coûteux et un système libre.",
    },
  ];

  useEffect(() => {
    if (step < introSteps.length) {
      const timeout = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 3500);
      return () => clearTimeout(timeout);
    } else {
      setShowButton(true);
    }
  }, [step, introSteps.length]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1a] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Particules de fond */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Logo NIRD */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8 text-center z-10"
      >
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-2">
          L&apos;Écran Bleu de la Libération
        </h1>
        <p className="text-gray-400 text-lg">
          Une expérience interactive par le mouvement NIRD
        </p>
      </motion.div>

      {/* Steps */}
      <div className="max-w-2xl w-full z-10">
        <AnimatePresence mode="wait">
          {introSteps.map(
            (item, index) =>
              index < step && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-start gap-4 mb-6 ${
                    index < step - 1 ? "opacity-50" : ""
                  }`}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Bouton Start */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mt-8 z-10"
          >
            <button
              onClick={onStart}
              className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-xl font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>🖥️</span>
                <span>Commencer la Simulation</span>
                <span>→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <p className="text-center text-gray-500 text-sm mt-4">
              Préparez-vous à expérimenter Windows... puis à découvrir la
              liberté.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* Nuit de l'Info badge */}
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm">
        🌙 Nuit de l&apos;Info 2024
      </div>
    </div>
  );
}

export default IntroScreen;
