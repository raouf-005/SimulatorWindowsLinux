"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Positions fixes pour les confettis
const CONFETTI_POSITIONS = [
  { left: "5%", color: "bg-green-500", delay: 0 },
  { left: "10%", color: "bg-purple-500", delay: 0.3 },
  { left: "15%", color: "bg-yellow-500", delay: 0.6 },
  { left: "20%", color: "bg-green-500", delay: 0.9 },
  { left: "25%", color: "bg-purple-500", delay: 1.2 },
  { left: "30%", color: "bg-yellow-500", delay: 1.5 },
  { left: "35%", color: "bg-green-500", delay: 0.1 },
  { left: "40%", color: "bg-purple-500", delay: 0.4 },
  { left: "45%", color: "bg-yellow-500", delay: 0.7 },
  { left: "50%", color: "bg-green-500", delay: 1.0 },
  { left: "55%", color: "bg-purple-500", delay: 1.3 },
  { left: "60%", color: "bg-yellow-500", delay: 0.2 },
  { left: "65%", color: "bg-green-500", delay: 0.5 },
  { left: "70%", color: "bg-purple-500", delay: 0.8 },
  { left: "75%", color: "bg-yellow-500", delay: 1.1 },
  { left: "80%", color: "bg-green-500", delay: 1.4 },
  { left: "85%", color: "bg-purple-500", delay: 0.15 },
  { left: "90%", color: "bg-yellow-500", delay: 0.45 },
  { left: "95%", color: "bg-green-500", delay: 0.75 },
  { left: "3%", color: "bg-purple-500", delay: 1.05 },
  { left: "13%", color: "bg-yellow-500", delay: 1.35 },
  { left: "23%", color: "bg-green-500", delay: 0.25 },
  { left: "33%", color: "bg-purple-500", delay: 0.55 },
  { left: "43%", color: "bg-yellow-500", delay: 0.85 },
  { left: "53%", color: "bg-green-500", delay: 1.15 },
  { left: "63%", color: "bg-purple-500", delay: 1.45 },
  { left: "73%", color: "bg-yellow-500", delay: 0.05 },
  { left: "83%", color: "bg-green-500", delay: 0.35 },
  { left: "93%", color: "bg-purple-500", delay: 0.65 },
  { left: "8%", color: "bg-yellow-500", delay: 0.95 },
];

export function EndingScreen({ moneySaved, onRestart }) {
  const [phase, setPhase] = useState(0);
  const [showActions, setShowActions] = useState(false);

  const phases = [
    {
      title: "🎉 Félicitations !",
      subtitle: "Vous avez libéré votre système",
    },
    {
      title: "💰 Économies réalisées",
      subtitle: `${(moneySaved || 27500000).toLocaleString("fr-FR")} €`,
    },
    {
      title: "🌍 Impact environnemental",
      subtitle: "Des milliers d'ordinateurs sauvés de la décharge",
    },
  ];

  const nirdActions = [
    {
      icon: "📢",
      title: "Sensibilisez",
      description:
        "Partagez cette simulation avec vos proches et collègues pour les informer sur l'obsolescence programmée.",
      link: "#share",
    },
    {
      icon: "🐧",
      title: "Essayez Linux",
      description:
        "Installez Linux Mint, Ubuntu ou Fedora sur un vieux PC. Redonnez-lui vie !",
      link: "https://linuxmint.com",
    },
    {
      icon: "✍️",
      title: "Signez la pétition",
      description:
        "Demandez à vos élus de migrer les administrations vers les logiciels libres.",
      link: "#petition",
    },
    {
      icon: "🏛️",
      title: "Interpellez vos élus",
      description:
        "Contactez vos députés et maires pour leur parler des économies possibles avec le libre.",
      link: "#contact",
    },
    {
      icon: "🤝",
      title: "Rejoignez le mouvement",
      description:
        "Participez aux actions du NIRD et des associations du logiciel libre près de chez vous.",
      link: "https://nird.fr",
    },
    {
      icon: "💻",
      title: "Contribuez",
      description:
        "Aidez à développer des logiciels libres ou à traduire de la documentation.",
      link: "https://github.com",
    },
  ];

  useEffect(() => {
    if (phase < phases.length) {
      const timeout = setTimeout(() => {
        setPhase((prev) => prev + 1);
      }, 2500);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowActions(true), 500);
    }
  }, [phase, phases.length]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0d1117] via-[#1a1a2e] to-[#2d1b4e] flex flex-col items-center justify-start p-4 sm:p-8 relative overflow-y-auto">
      {/* Particules de célébration avec positions fixes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {CONFETTI_POSITIONS.map((confetti, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${confetti.color}`}
            style={{ left: confetti.left }}
            initial={{ y: -20 }}
            animate={{
              y: "100vh",
              rotate: i % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: confetti.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl w-full z-10 pt-8">
        {/* Phases d'intro */}
        <AnimatePresence mode="wait">
          {phase <= phases.length && phase > 0 && (
            <motion.div
              key={phase}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                {phases[phase - 1].title}
              </h1>
              <p
                className={`text-2xl sm:text-4xl ${
                  phase === 2 ? "text-green-400 font-bold" : "text-gray-300"
                }`}
              >
                {phases[phase - 1].subtitle}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header final */}
        {showActions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              🐧 Passez à l&apos;action avec le NIRD !
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cette simulation n&apos;est que le début. Voici comment vous
              pouvez contribuer à libérer nos systèmes informatiques.
            </p>
          </motion.div>
        )}

        {/* Actions NIRD */}
        <AnimatePresence>
          {showActions && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
            >
              {nirdActions.map((action, index) => (
                <motion.a
                  key={index}
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {action.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{action.description}</p>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats comparatives */}
        {showActions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-6 mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              📊 Comparatif Windows vs Linux
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">🪟</div>
                <h4 className="font-bold text-red-400 mb-2">Windows</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>💰 Licences : ~150€/poste/an</li>
                  <li>🦠 Cible #1 des ransomwares</li>
                  <li>🗑️ Obsolescence forcée</li>
                  <li>👁️ Télémétrie invasive</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🐧</div>
                <h4 className="font-bold text-green-400 mb-2">Linux</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>✅ 100% gratuit</li>
                  <li>🛡️ Sécurité renforcée</li>
                  <li>♻️ Fonctionne sur vieux PCs</li>
                  <li>🔒 Respect vie privée</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Citation NIRD */}
        {showActions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mb-8 text-center"
          >
            <p className="text-lg text-gray-300 italic mb-4">
              &ldquo;La liberté informatique n&apos;est pas une option,
              c&apos;est un droit fondamental. Ensemble, libérons nos
              administrations et nos citoyens du joug des logiciels
              propriétaires.&rdquo;
            </p>
            <p className="text-purple-400 font-bold">— Mouvement NIRD</p>
          </motion.div>
        )}

        {/* Boutons finaux */}
        {showActions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-8"
          >
            <button
              onClick={onRestart}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold hover:scale-105 transition-transform"
            >
              🔄 Recommencer la simulation
            </button>
            <a
              href="https://nird.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl text-white font-bold hover:scale-105 transition-transform"
            >
              🐧 Visiter NIRD.fr
            </a>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "L'Écran Bleu de la Libération",
                    text: "Découvrez pourquoi Linux est meilleur que Windows !",
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Lien copié !");
                }
              }}
              className="px-8 py-3 bg-white/10 border border-white/30 rounded-xl text-white font-bold hover:bg-white/20 transition-all"
            >
              📤 Partager
            </button>
          </motion.div>
        )}
      </div>

      {/* Badge Nuit de l'Info */}
      <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm z-20">
        🌙 Nuit de l&apos;Info 2024 - Mouvement NIRD
      </div>
    </div>
  );
}

export default EndingScreen;
