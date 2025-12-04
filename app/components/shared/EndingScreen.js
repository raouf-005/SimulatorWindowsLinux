"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Positions fixes pour éviter les erreurs d'hydratation
const STAR_POSITIONS = [
  { x: 5, y: 10, size: 1, delay: 0 },
  { x: 15, y: 25, size: 2, delay: 0.5 },
  { x: 25, y: 8, size: 1.5, delay: 1 },
  { x: 35, y: 40, size: 1, delay: 0.3 },
  { x: 45, y: 15, size: 2, delay: 0.8 },
  { x: 55, y: 35, size: 1, delay: 1.2 },
  { x: 65, y: 20, size: 1.5, delay: 0.2 },
  { x: 75, y: 45, size: 2, delay: 0.6 },
  { x: 85, y: 12, size: 1, delay: 1.5 },
  { x: 95, y: 30, size: 1.5, delay: 0.4 },
  { x: 10, y: 55, size: 2, delay: 0.9 },
  { x: 20, y: 70, size: 1, delay: 1.1 },
  { x: 30, y: 60, size: 1.5, delay: 0.7 },
  { x: 40, y: 80, size: 1, delay: 1.3 },
  { x: 50, y: 65, size: 2, delay: 0.1 },
  { x: 60, y: 75, size: 1.5, delay: 0.85 },
  { x: 70, y: 85, size: 1, delay: 1.4 },
  { x: 80, y: 58, size: 2, delay: 0.55 },
  { x: 90, y: 72, size: 1.5, delay: 1.05 },
  { x: 12, y: 88, size: 1, delay: 0.35 },
];

const CINEMATIC_PHASES = [
  { id: "blackout", duration: 1500 },
  { id: "title", duration: 3000 },
  { id: "savings", duration: 4000 },
  { id: "impact", duration: 4000 },
  { id: "quote", duration: 4000 },
  { id: "credits", duration: 5000 },
  { id: "cta", duration: 0 }, // Reste ici
];

export function EndingScreen({ budget = 500, moneySaved, onRestart, onNird }) {
  const [phase, setPhase] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Utiliser moneySaved si fourni, sinon calculer à partir de budget
  const actualSavings = moneySaved || 500 - budget;
  const actualBudget = budget;

  useEffect(() => {
    if (!isAutoPlay) return;

    const currentPhase = CINEMATIC_PHASES[phase];
    if (currentPhase.duration === 0) return; // Dernière phase

    const timer = setTimeout(() => {
      setPhase((prev) => Math.min(prev + 1, CINEMATIC_PHASES.length - 1));
    }, currentPhase.duration);

    return () => clearTimeout(timer);
  }, [phase, isAutoPlay]);

  const skipToEnd = useCallback(() => {
    setIsAutoPlay(false);
    setPhase(CINEMATIC_PHASES.length - 1);
  }, []);

  const currentPhaseId = CINEMATIC_PHASES[phase].id;

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* Étoiles scintillantes */}
      <div className="absolute inset-0">
        {STAR_POSITIONS.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              delay: star.delay,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Bouton Skip */}
      {isAutoPlay && phase < CINEMATIC_PHASES.length - 1 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={skipToEnd}
          className="absolute top-6 right-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/60 text-sm rounded-full hover:bg-white/20 transition-colors"
        >
          Passer ➜
        </motion.button>
      )}

      <AnimatePresence mode="wait">
        {/* Phase 0: Noir total puis fade in */}
        {currentPhaseId === "blackout" && (
          <motion.div
            key="blackout"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-black z-50"
          />
        )}

        {/* Phase 1: Titre épique */}
        {currentPhaseId === "title" && (
          <motion.div
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-8xl mb-6"
              >
                🐧
              </motion.div>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400"
              >
                LIBÉRATION
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-xl text-green-300 mt-4 tracking-widest"
              >
                VOUS ÊTES MAINTENANT LIBRE
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* Phase 2: Économies spectaculaires */}
        {currentPhaseId === "savings" && (
          <motion.div
            key="savings"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl text-gray-400 mb-4"
              >
                Votre migration vous a fait économiser
              </motion.p>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="relative"
              >
                <span className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
                  {actualSavings.toLocaleString("fr-FR")}€
                </span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -top-4 -right-4 text-4xl"
                >
                  💰
                </motion.div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-gray-500 mt-6 text-lg"
              >
                Budget préservé :{" "}
                <span className="text-green-400 font-bold">
                  {actualBudget.toLocaleString("fr-FR")}€
                </span>
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* Phase 3: Impact statistiques */}
        {currentPhaseId === "impact" && (
          <motion.div
            key="impact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="grid grid-cols-3 gap-8 md:gap-16 px-4">
              {[
                {
                  value: "0€",
                  label: "de licence",
                  icon: "💵",
                  color: "from-green-400 to-emerald-400",
                },
                {
                  value: "100%",
                  label: "de liberté",
                  icon: "🔓",
                  color: "from-blue-400 to-cyan-400",
                },
                {
                  value: "∞",
                  label: "de possibilités",
                  icon: "✨",
                  color: "from-purple-400 to-pink-400",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.3, duration: 0.6 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl mb-3"
                  >
                    {stat.icon}
                  </motion.div>
                  <p
                    className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-400 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Phase 4: Citation inspirante */}
        {currentPhaseId === "quote" && (
          <motion.div
            key="quote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center px-8"
          >
            <div className="max-w-4xl text-center">
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-6xl text-purple-400 mb-6"
              >
                &ldquo;
              </motion.div>
              <motion.blockquote
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-4xl text-white font-light leading-relaxed"
              >
                Le logiciel libre est une question de{" "}
                <span className="text-purple-400 font-bold">liberté</span>, pas
                de prix. Libre comme la{" "}
                <span className="text-green-400 font-bold">
                  liberté d&apos;expression
                </span>
                , pas comme une bière gratuite.
              </motion.blockquote>
              <motion.cite
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="block mt-8 text-gray-500 text-lg"
              >
                — Richard Stallman, fondateur du projet GNU
              </motion.cite>
            </div>
          </motion.div>
        )}

        {/* Phase 5: Crédits cinématiques */}
        {currentPhaseId === "credits" && (
          <motion.div
            key="credits"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: -100 }}
              transition={{ duration: 5, ease: "linear" }}
              className="text-center space-y-8"
            >
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
                  Présenté par
                </p>
                <p className="text-2xl text-white font-bold">
                  L&apos;Équipe NIRD
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
                  Dans le cadre de
                </p>
                <p className="text-2xl text-purple-400 font-bold">
                  La Nuit de l&apos;Info 2024
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
                  Une expérience
                </p>
                <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-bold">
                  L&apos;Écran Bleu de la Libération
                </p>
              </div>
              <div className="pt-8">
                <p className="text-gray-600 text-xs">
                  🐧 Propulsé par Linux • ❤️ Fait avec passion • 🌍 Open Source
                  Forever
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Phase 6: Call to Action final */}
        {currentPhaseId === "cta" && (
          <motion.div
            key="cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center px-4"
          >
            {/* Titre */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                🎬{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Fin
                </span>
              </h1>
              <p className="text-gray-400 text-lg">
                Votre aventure vers la liberté ne fait que commencer
              </p>
            </motion.div>

            {/* Actions NIRD */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
            >
              {[
                {
                  icon: "🌐",
                  label: "Visiter NIRD",
                  action: onNird,
                  color: "from-blue-600 to-cyan-600",
                },
                {
                  icon: "🐧",
                  label: "Installer Linux",
                  link: "https://ubuntu.com/download",
                  color: "from-orange-600 to-amber-600",
                },
                {
                  icon: "📚",
                  label: "En apprendre plus",
                  link: "https://www.gnu.org/philosophy/free-sw.fr.html",
                  color: "from-green-600 to-emerald-600",
                },
                {
                  icon: "🔄",
                  label: "Rejouer",
                  action: onRestart,
                  color: "from-purple-600 to-pink-600",
                },
              ].map((item, i) => (
                <motion.button
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (item.action) item.action();
                    else if (item.link) window.open(item.link, "_blank");
                  }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl hover:shadow-2xl transition-all`}
                >
                  <span className="text-4xl block mb-2">{item.icon}</span>
                  <span className="font-medium text-sm">{item.label}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Stats finales */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-8 text-center"
            >
              <div>
                <p className="text-3xl font-bold text-green-400">
                  {actualBudget.toLocaleString("fr-FR")}€
                </p>
                <p className="text-xs text-gray-500">préservés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">
                  {actualSavings.toLocaleString("fr-FR")}€
                </p>
                <p className="text-xs text-gray-500">économisés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">100%</p>
                <p className="text-xs text-gray-500">libre</p>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-6 text-gray-600 text-xs"
            >
              🐧 Nuit de l&apos;Info 2024 • L&apos;Écran Bleu de la Libération •
              Équipe NIRD
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Indicateur de progression */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {CINEMATIC_PHASES.map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i <= phase ? "bg-purple-500" : "bg-gray-700"
            }`}
            animate={i === phase ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}

export default EndingScreen;
