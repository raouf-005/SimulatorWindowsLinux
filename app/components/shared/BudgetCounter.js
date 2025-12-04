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

  useEffect(() => {
    // Animation fluide du compteur
    const diff = amount - displayAmount;
    if (Math.abs(diff) > 0) {
      setIsAnimating(true);
      setLastChange(diff);
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

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`
      backdrop-blur-sm rounded-lg p-4 text-white shadow-xl border
      ${
        isPositive
          ? "bg-green-900/90 border-green-500"
          : "bg-red-900/90 border-red-700"
      }
      transition-transform duration-200
    `}
    >
      <motion.div
        animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <div className="text-sm opacity-80 flex items-center gap-2">
          <span>💰</span>
          <span>{label}</span>
        </div>
        <div
          className={`
          text-2xl font-bold font-mono mt-1
          ${isPositive ? "text-green-300" : "text-red-300"}
        `}
        >
          {formattedAmount} €
        </div>

        {/* Indicator de changement */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-xs absolute -top-2 right-2 px-2 py-0.5 rounded ${
                lastChange > 0
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {lastChange > 0 ? "+" : ""}
              {Math.floor(lastChange).toLocaleString("fr-FR")} €
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className={`
          text-xs mt-1 flex items-center gap-1
          ${isPositive ? "text-green-400" : "text-red-400"}
        `}
        >
          <motion.span
            animate={isAnimating ? { y: [0, -3, 0] } : {}}
            transition={{ repeat: isAnimating ? Infinity : 0, duration: 0.5 }}
          >
            {isPositive ? "▲" : "▼"}
          </motion.span>
          <span>{isPositive ? "En hausse !" : "En chute libre..."}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BudgetCounter;
