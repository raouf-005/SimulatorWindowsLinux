"use client";

import { useState, useEffect } from "react";

export function TransitionScreen({ onComplete, duration = 2000 }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initialisation...");

  const bootMessages = [
    "Libération du système en cours...",
    "Suppression des bloatwares...",
    "Récupération de votre vie privée...",
    "Installation des libertés numériques...",
    "Activation du bon sens...",
    "Bienvenue dans le monde libre !",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, duration / 50);

    return () => clearInterval(progressInterval);
  }, [duration, onComplete]);

  useEffect(() => {
    const messageIndex = Math.floor((progress / 100) * bootMessages.length);
    setStatusText(
      bootMessages[Math.min(messageIndex, bootMessages.length - 1)]
    );
  }, [progress]);

  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Effet Matrix en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <MatrixRain />
      </div>

      {/* Logo Tux */}
      <div className="text-8xl mb-8 animate-bounce z-10">🐧</div>

      {/* Texte de chargement */}
      <div className="text-green-400 text-xl font-mono mb-6 z-10">
        {statusText}
      </div>

      {/* Barre de progression */}
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden z-10">
        <div
          className="h-full bg-gradient-to-r from-green-500 to-green-300 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Pourcentage */}
      <div className="text-green-400 font-mono mt-4 z-10">{progress}%</div>

      {/* Messages de boot style Linux */}
      <div className="absolute bottom-8 left-8 text-green-500/50 font-mono text-xs z-10">
        <div>[ OK ] Started Linux liberation service</div>
        <div>[ OK ] Removed Microsoft telemetry</div>
        <div>[ OK ] Restored user freedom</div>
        <div>[ OK ] Enabled privacy mode</div>
      </div>
    </div>
  );
}

function MatrixRain() {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const cols = [];
    for (let i = 0; i < 50; i++) {
      cols.push({
        x: i * 20,
        chars: Array.from(
          { length: 30 },
          () => chars[Math.floor(Math.random() * chars.length)]
        ),
        speed: 0.5 + Math.random() * 1.5,
        offset: Math.random() * 100,
      });
    }
    setColumns(cols);
  }, []);

  return (
    <div className="absolute inset-0 font-mono text-green-500 text-sm overflow-hidden">
      {columns.map((col, i) => (
        <div
          key={i}
          className="absolute animate-matrix-fall"
          style={{
            left: col.x,
            animationDuration: `${3 / col.speed}s`,
            animationDelay: `-${col.offset}s`,
          }}
        >
          {col.chars.map((char, j) => (
            <div
              key={j}
              className="opacity-70"
              style={{ opacity: 1 - j * 0.03 }}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TransitionScreen;
