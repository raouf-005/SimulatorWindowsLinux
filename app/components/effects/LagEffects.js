"use client";

import { useState, useEffect, useCallback } from "react";

export function useLaggyMouse(isEnabled = true, lagAmount = 150) {
  const [realPos, setRealPos] = useState({ x: 0, y: 0 });
  const [laggyPos, setLaggyPos] = useState({ x: 0, y: 0 });
  const [isStuttering, setIsStuttering] = useState(false);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e) => {
      setRealPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;

    // Random stuttering effect - moins fréquent et plus subtil
    const stutterInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        setIsStuttering(true);
        setTimeout(() => setIsStuttering(false), 100 + Math.random() * 200);
      }
    }, 2000);

    const timeout = setTimeout(() => {
      if (!isStuttering) {
        setLaggyPos(realPos);
      }
    }, lagAmount + (isStuttering ? 500 : 0));

    return () => {
      clearTimeout(timeout);
      clearInterval(stutterInterval);
    };
  }, [realPos, isEnabled, lagAmount, isStuttering]);

  return { realPos, laggyPos, isStuttering };
}

export function LaggyMouse({ isEnabled }) {
  const { laggyPos, isStuttering } = useLaggyMouse(isEnabled, 150);

  if (!isEnabled) return null;

  return (
    <div
      className={`fixed w-6 h-6 pointer-events-none z-[9999] ${
        isStuttering ? "opacity-50" : ""
      }`}
      style={{
        left: laggyPos.x - 2,
        top: laggyPos.y - 2,
        transition: isStuttering ? "none" : "all 0.2s ease-out",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="drop-shadow-lg"
      >
        <path
          d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.35-.92L6.35 2.79a.5.5 0 0 0-.85.42z"
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
      {/* Loading indicator when stuttering */}
      {isStuttering && (
        <div className="absolute -bottom-2 -right-2">
          <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

export function useSlowdown(isEnabled = true) {
  const [isFrozen, setIsFrozen] = useState(false);
  const [freezeCount, setFreezeCount] = useState(0);

  useEffect(() => {
    if (!isEnabled) return;

    // Gel aléatoire de l'interface - très subtil
    const freezeInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        // 10% de chance - très rare
        setIsFrozen(true);
        setFreezeCount((prev) => prev + 1);
        // Freeze très court
        setTimeout(() => setIsFrozen(false), 200 + Math.random() * 400);
      }
    }, 2000); // Toutes les 2 secondes

    return () => clearInterval(freezeInterval);
  }, [isEnabled]);

  return { isFrozen, freezeCount };
}

export function useMoneyDrain(isEnabled = true, initialAmount = 50000000) {
  const [money, setMoney] = useState(initialAmount);

  useEffect(() => {
    if (!isEnabled) return;

    // Drain BEAUCOUP plus rapide
    const drainInterval = setInterval(() => {
      setMoney((prev) => Math.max(0, prev - 50000 - Math.random() * 100000));
    }, 300); // Plus rapide !

    return () => clearInterval(drainInterval);
  }, [isEnabled]);

  const bigExpense = useCallback((amount, message) => {
    setMoney((prev) => Math.max(0, prev - amount));
    return message;
  }, []);

  const addMoney = useCallback((amount) => {
    setMoney((prev) => prev + amount);
  }, []);

  return { money, setMoney, bigExpense, addMoney };
}

export default { useLaggyMouse, LaggyMouse, useSlowdown, useMoneyDrain };
