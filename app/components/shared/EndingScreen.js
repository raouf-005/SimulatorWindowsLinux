"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- CONFIGURATION ---
const STAR_POSITIONS = [
  { x: 5, y: 10, size: 2, delay: 0 },
  { x: 15, y: 25, size: 3, delay: 0.5 },
  { x: 25, y: 8, size: 2, delay: 1 },
  { x: 35, y: 40, size: 2, delay: 0.3 },
  { x: 45, y: 15, size: 3, delay: 0.8 },
  { x: 55, y: 35, size: 2, delay: 1.2 },
  { x: 65, y: 20, size: 3, delay: 0.2 },
  { x: 75, y: 45, size: 2, delay: 0.6 },
  { x: 85, y: 12, size: 2, delay: 1.5 },
  { x: 95, y: 30, size: 3, delay: 0.4 },
  { x: 10, y: 55, size: 2, delay: 0.9 },
  { x: 20, y: 70, size: 2, delay: 1.1 },
  { x: 30, y: 60, size: 3, delay: 0.7 },
  { x: 40, y: 80, size: 2, delay: 1.3 },
  { x: 50, y: 65, size: 3, delay: 0.1 },
  { x: 60, y: 75, size: 2, delay: 0.85 },
  { x: 70, y: 85, size: 2, delay: 1.4 },
  { x: 80, y: 58, size: 3, delay: 0.55 },
  { x: 90, y: 72, size: 2, delay: 1.05 },
  { x: 12, y: 88, size: 2, delay: 0.35 },
];

const CINEMATIC_PHASES = [
  { id: "blackout", duration: 1500 },
  { id: "title", duration: 4000 },
  { id: "savings", duration: 4500 },
  { id: "impact", duration: 4500 },
  { id: "quote", duration: 5000 },
  { id: "credits", duration: 6000 },
  { id: "cta", duration: 0 },
];

export function EndingScreen({ budget = 500, moneySaved, onRestart, onNird }) {
  const [phase, setPhase] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const actualSavings = moneySaved || 500 - budget;
  const actualBudget = budget;

  useEffect(() => {
    if (!isAutoPlay) return;

    const currentPhase = CINEMATIC_PHASES[phase];
    if (currentPhase.duration === 0) return;

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
    <div className="fixed inset-0 bg-[#050508] overflow-hidden font-sans text-white select-none">
      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. Digital Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* 2. Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] pointer-events-none" />

      {/* 3. Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {STAR_POSITIONS.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white shadow-[0_0_4px_white]"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* --- SKIP BUTTON --- */}
      <AnimatePresence>
        {isAutoPlay && phase < CINEMATIC_PHASES.length - 1 && (
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2 }}
            onClick={skipToEnd}
            className="absolute top-8 right-8 z-50 group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full hover:bg-white/10 transition-all"
          >
            <span className="text-xs font-mono text-gray-400 group-hover:text-white">
              SKIP_INTRO
            </span>
            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* --- CONTENT PHASES --- */}
      <AnimatePresence mode="wait">
        {/* Phase 0: Blackout */}
        {currentPhaseId === "blackout" && (
          <motion.div
            key="blackout"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="absolute inset-0 bg-black z-50"
          />
        )}

        {/* Phase 1: Title */}
        {currentPhaseId === "title" && (
          <motion.div
            key="title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-8xl mb-8 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              🐧
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-4">
              LIBÉRATION
            </h1>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent mb-4" />
            <p className="font-mono text-green-400 tracking-[0.2em] text-sm md:text-base">
              SYSTEM_STATUS: <span className="text-white">UNLOCKED</span>
            </p>
          </motion.div>
        )}

        {/* Phase 2: Savings */}
        {currentPhaseId === "savings" && (
          <motion.div
            key="savings"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6"
          >
            <p className="text-gray-400 text-xl mb-6 uppercase tracking-widest">
              Économies Réalisées
            </p>

            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/20 blur-[60px] rounded-full" />
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="relative text-7xl md:text-9xl font-mono font-bold text-white drop-shadow-2xl"
              >
                {actualSavings.toLocaleString("fr-FR")}€
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-300">Budget restant: </span>
              <span className="font-mono text-green-400 font-bold">
                {actualBudget}€
              </span>
            </motion.div>
          </motion.div>
        )}

        {/* Phase 3: Impact Stats */}
        {currentPhaseId === "impact" && (
          <motion.div
            key="impact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 flex items-center justify-center p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              {[
                {
                  icon: "💵",
                  val: "0€",
                  label: "Coût Licence",
                  col: "text-green-400",
                },
                {
                  icon: "🔓",
                  val: "100%",
                  label: "Open Source",
                  col: "text-blue-400",
                },
                {
                  icon: "🧠",
                  val: "+99",
                  label: "QI Technique",
                  col: "text-purple-400",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#0f0f1a]/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center group hover:border-white/20 transition-colors"
                >
                  <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </span>
                  <span
                    className={`text-6xl font-mono font-bold mb-2 ${stat.col}`}
                  >
                    {stat.val}
                  </span>
                  <span className="text-gray-400 uppercase tracking-widest text-sm">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Phase 4: Quote */}
        {currentPhaseId === "quote" && (
          <motion.div
            key="quote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <div className="max-w-4xl relative">
              <span className="absolute -top-12 -left-8 text-8xl text-white/10 font-serif">
                “
              </span>
              <p className="text-3xl md:text-5xl font-light leading-snug text-center text-gray-100">
                Le logiciel libre est une question de{" "}
                <span className="text-purple-400 font-semibold">liberté</span>,
                pas de prix.
                <br />
                <br />
                Libre comme la{" "}
                <span className="text-blue-400 font-semibold">
                  liberté d&apos;expression
                </span>
                , pas comme une bière gratuite.
              </p>
              <div className="mt-12 text-center">
                <div className="inline-block px-4 py-1 border border-white/20 rounded-full text-sm text-gray-400 font-mono">
                  — Richard Stallman
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Phase 5: Credits */}
        {currentPhaseId === "credits" && (
          <motion.div
            key="credits"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: -50 }}
              transition={{ duration: 6, ease: "linear" }}
              className="text-center space-y-12"
            >
              {[
                {
                  sub: "Présenté par",
                  title: "L'Équipe NIRD",
                  col: "text-white",
                },
                {
                  sub: "Dans le cadre de",
                  title: "Nuit de l'Info 2025",
                  col: "text-purple-400",
                },
                {
                  sub: "Simulation",
                  title: "L'Écran Bleu",
                  col: "text-blue-400",
                },
              ].map((c, i) => (
                <div key={i}>
                  <p className="text-gray-600 text-xs uppercase tracking-[0.3em] mb-3">
                    {c.sub}
                  </p>
                  <h3 className={`text-3xl font-bold ${c.col}`}>{c.title}</h3>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Phase 6: CTA (Final) */}
        {currentPhaseId === "cta" && (
          <motion.div
            key="cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6"
          >
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  MISSION ACCOMPLIE
                </span>
              </h1>
              <p className="text-gray-400 text-lg">
                Votre système est maintenant libre.
              </p>
            </motion.div>

            {/* Action Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mb-12">
              {[
                {
                  icon: "🌐",
                  label: "Site NIRD",
                  sub: "Découvrir",
                  action: onNird,
                  color: "hover:border-blue-500/50 hover:bg-blue-500/10",
                },
                {
                  icon: "🐧",
                  label: "Installer Linux",
                  sub: "Get Ubuntu",
                  link: "https://ubuntu.com/download",
                  color: "hover:border-orange-500/50 hover:bg-orange-500/10",
                },
                {
                  icon: "📖",
                  label: "Philosophie",
                  sub: "GNU Project",
                  link: "https://www.gnu.org/philosophy/free-sw.fr.html",
                  color: "hover:border-green-500/50 hover:bg-green-500/10",
                },
                {
                  icon: "↺",
                  label: "Rejouer",
                  sub: "Reset System",
                  action: onRestart,
                  color: "hover:border-purple-500/50 hover:bg-purple-500/10",
                },
              ].map((item, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    item.action
                      ? item.action()
                      : window.open(item.link, "_blank")
                  }
                  className={`relative p-6 rounded-2xl bg-[#0f0f1a]/80 backdrop-blur-xl border border-white/10 text-left transition-all duration-300 group ${item.color}`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="font-bold text-lg text-white mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                    {item.sub}
                  </div>

                  {/* Subtle Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.button>
              ))}
            </div>

            {/* Final Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-8"
            >
              {[
                {
                  label: "Budget Préservé",
                  val: `${actualBudget}€`,
                  col: "text-green-400",
                },
                {
                  label: "Économies",
                  val: `${actualSavings}€`,
                  col: "text-purple-400",
                },
                { label: "Statut", val: "LIBRE", col: "text-blue-400" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className={`text-2xl font-mono font-bold ${s.col}`}>
                    {s.val}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- PROGRESS INDICATOR --- */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
        {CINEMATIC_PHASES.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i <= phase
                ? i === phase
                  ? "w-8 bg-purple-500 shadow-[0_0_10px_#a855f7]"
                  : "w-2 bg-gray-600"
                : "w-2 bg-gray-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default EndingScreen;
