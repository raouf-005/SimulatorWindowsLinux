"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BudgetCounter({
  amount,
  isPositive = false,
  label = "Budget de l'État",
}) {
  const [displayAmount, setDisplayAmount] = useState(amount);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastChange, setLastChange] = useState(0);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const diff = amount - displayAmount;
    if (Math.abs(diff) > 0) {
      setIsAnimating(true);
      setLastChange(diff);

      // Shake effect quand l'argent diminue
      if (diff < 0) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }

      const step = diff / 20;
      const interval = setInterval(() => {
        setDisplayAmount((prev) => {
          const next = prev + step;
          if ((step > 0 && next >= amount) || (step < 0 && next <= amount)) {
            clearInterval(interval);
            setIsAnimating(false);
            return amount;
          }
          return next;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [amount]);

  const formattedAmount = Math.floor(displayAmount).toLocaleString("fr-FR");

  // Calculer le pourcentage pour la barre de progression (basé sur 50M max)
  const percentage = Math.min(
    100,
    Math.max(0, (displayAmount / 50000000) * 100)
  );

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, x: 50 }}
      animate={{
        scale: 1,
        opacity: 1,
        x: 0,
        rotate: shake ? [0, -2, 2, -2, 2, 0] : 0,
      }}
      transition={{
        type: "spring",
        rotate: { duration: 0.5 },
      }}
      className={`
        relative overflow-hidden rounded-2xl p-5 text-white shadow-2xl border-2
        min-w-[280px]
        ${
          isPositive
            ? "bg-gradient-to-br from-green-800 via-green-900 to-emerald-950 border-green-400 shadow-green-500/30"
            : "bg-gradient-to-br from-red-800 via-red-900 to-red-950 border-red-400 shadow-red-500/30"
        }
      `}
    >
      {/* Effet de brillance animé */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ["-200%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Icône principale animée */}
      <motion.div
        className="absolute -right-4 -top-4 text-7xl opacity-20"
        animate={{
          rotate: isAnimating ? [0, 10, -10, 0] : 0,
          scale: isAnimating ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {isPositive ? "🏦" : "💸"}
      </motion.div>

      <motion.div
        animate={isAnimating ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <motion.span
            className="text-2xl"
            animate={
              isAnimating && !isPositive
                ? {
                    y: [0, -5, 0],
                    rotate: [0, -20, 0],
                  }
                : {}
            }
            transition={{ duration: 0.3, repeat: isAnimating ? 3 : 0 }}
          >
            {isPositive ? "💰" : "🔥"}
          </motion.span>
          <span className="text-sm font-medium opacity-90">{label}</span>
        </div>

        {/* Montant principal */}
        <motion.div
          className={`
            text-3xl font-black font-mono tracking-tight
            ${isPositive ? "text-green-200" : "text-red-200"}
          `}
          animate={
            isAnimating
              ? {
                  textShadow: isPositive
                    ? [
                        "0 0 10px rgba(34,197,94,0)",
                        "0 0 20px rgba(34,197,94,0.8)",
                        "0 0 10px rgba(34,197,94,0)",
                      ]
                    : [
                        "0 0 10px rgba(239,68,68,0)",
                        "0 0 20px rgba(239,68,68,0.8)",
                        "0 0 10px rgba(239,68,68,0)",
                      ],
                }
              : {}
          }
          transition={{ duration: 0.5 }}
        >
          {formattedAmount} €
        </motion.div>

        {/* Barre de progression */}
        <div className="mt-3 mb-2">
          <div
            className={`h-2 rounded-full overflow-hidden ${
              isPositive ? "bg-green-950" : "bg-red-950"
            }`}
          >
            <motion.div
              className={`h-full rounded-full ${
                isPositive
                  ? "bg-gradient-to-r from-green-400 to-emerald-300"
                  : "bg-gradient-to-r from-red-400 to-orange-400"
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Indicateur de changement */}
        <AnimatePresence>
          {isAnimating && Math.abs(lastChange) > 100 && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className={`
                absolute -top-3 -right-3 px-3 py-1 rounded-full text-sm font-bold
                ${
                  lastChange > 0
                    ? "bg-green-400 text-green-900"
                    : "bg-red-400 text-red-900"
                }
                shadow-lg
              `}
            >
              {lastChange > 0 ? "+" : ""}
              {Math.floor(lastChange).toLocaleString("fr-FR")} €
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status avec animation */}
        <div
          className={`
          text-sm mt-1 flex items-center gap-2 font-medium
          ${isPositive ? "text-green-300" : "text-red-300"}
        `}
        >
          <motion.span
            animate={
              isAnimating
                ? {
                    y: isPositive ? [0, -4, 0] : [0, 4, 0],
                    scale: [1, 1.3, 1],
                  }
                : {}
            }
            transition={{ repeat: isAnimating ? Infinity : 0, duration: 0.4 }}
            className="text-lg"
          >
            {isPositive ? "📈" : "📉"}
          </motion.span>
          <span>
            {isPositive
              ? "Économies en cours ! 🎉"
              : "Hémorragie financière... 💀"}
          </span>
        </div>

        {/* Message d'alerte pour Windows */}
        {!isPositive && displayAmount < 20000000 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="mt-2 text-xs text-yellow-300 bg-yellow-900/50 rounded px-2 py-1"
          >
            ⚠️ Budget critique ! Microsoft vous ruine !
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default BudgetCounter;
