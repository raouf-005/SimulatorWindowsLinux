"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- CONFIGURATION ---
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
      title: "Impact Écologique",
      highlight: "400 millions d'ordinateurs",
      text: "sont jetés chaque année à cause de l'obsolescence programmée.",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: "💸",
      title: "Gaspillage Public",
      highlight: "Des milliards d'euros",
      text: "dépensés en licences Microsoft, alors qu'une alternative gratuite existe.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🐧",
      title: "La Solution",
      highlight: "La Gendarmerie Nationale",
      text: "a migré 37 000 postes vers Linux. Résultat : 2 millions €/an d'économies.",
      color: "from-blue-400 to-cyan-500",
    },
  ];

  useEffect(() => {
    if (step < introSteps.length) {
      const timeout = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    } else {
      setShowButton(true);
    }
  }, [step, introSteps.length]);

  return (
    <div className="w-full h-full bg-[#050508] relative overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* --- BACKGROUND EFFECTS --- */}

      {/* 1. Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 2. Radial Vignette for focus */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050508_90%)] pointer-events-none" />

      {/* 3. Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            style={{ left: particle.left, top: particle.top }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center">
        {/* Logo / Header */}
        <motion.div
          initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              L&apos;Écran Bleu
            </span>{" "}
            <br className="sm:hidden" />
            <span className="text-white">de la Libération</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-blue-200/60 text-sm sm:text-base uppercase tracking-widest font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Initialisation du système NIRD
          </div>
        </motion.div>

        {/* Info Cards Container - Fixed Height to prevent jumps */}
        <div className="w-full flex flex-col gap-4 min-h-[340px]">
          {introSteps.map((item, index) => (
            <AnimatePresence key={index}>
              {index < step && (
                <motion.div
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  className="group relative"
                >
                  {/* Card Glass Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-xl blur-sm" />

                  <div className="relative flex items-center gap-5 p-4 rounded-xl border border-white/10 bg-[#0f0f1a]/60 backdrop-blur-md shadow-lg hover:border-white/20 transition-colors">
                    {/* Icon Box */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
                    >
                      {item.icon}
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-snug">
                        <span
                          className={`font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        >
                          {item.highlight}
                        </span>{" "}
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* --- BUTTON SECTION --- */}
        <div className="h-24 w-full flex justify-center items-center mt-6 relative">
          <AnimatePresence>
            {showButton && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="relative group"
              >
                {/* Button Glow Behind */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt" />

                <button
                  onClick={onStart}
                  className="relative px-8 py-4 bg-black rounded-xl leading-none flex items-center divide-x divide-gray-600"
                >
                  <span className="flex items-center space-x-3 px-4">
                    <span className="text-2xl group-hover:-translate-y-1 transition-transform duration-300">
                      🚀
                    </span>
                    <span className="text-gray-100 font-bold text-lg tracking-wider group-hover:text-white transition-colors">
                      LANCER LA SIMULATION
                    </span>
                  </span>
                  <span className="pl-4 text-purple-400 group-hover:text-purple-300 transition-colors text-sm font-mono">
                    ./start.sh
                  </span>
                </button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-8 left-0 right-0 text-center text-xs text-gray-500 font-mono"
                >
                  Attention: Risque de prise de conscience élevé
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Elements */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onStart}
        className="absolute bottom-6 right-6 text-gray-600 hover:text-white text-xs uppercase tracking-widest transition-colors z-20"
      >
        Skip Intro &rarr;
      </motion.button>

      <div className="absolute top-6 right-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-blue-200 text-xs font-medium shadow-lg">
        🌙 Nuit de l&apos;Info 2025
      </div>

      {/* Progress Dots */}
      <div className="absolute left-6 bottom-1/2 -translate-y-1/2 flex flex-col gap-3 hidden sm:flex">
        {introSteps.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 transition-all duration-500 rounded-full ${
              index < step
                ? "h-6 bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                : "h-1.5 bg-gray-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default IntroScreen;
