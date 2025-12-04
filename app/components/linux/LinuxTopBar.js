"use client";

import { useState, useEffect } from "react";

export function LinuxTopBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-8 bg-black/60 backdrop-blur-sm flex items-center justify-between px-4 text-white text-sm z-50">
      {/* Menu Applications */}
      <div className="flex items-center gap-4">
        <span className="font-bold text-orange-400">Activités</span>
        <span className="hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer">
          📂 Fichiers
        </span>
        <span className="hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer">
          🦊 Firefox
        </span>
        <span className="hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer">
          ⬛ Terminal
        </span>
      </div>

      {/* Centre - Date/Heure */}
      <div className="absolute left-1/2 -translate-x-1/2 text-sm">
        {currentTime.toLocaleDateString("fr-FR", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })}{" "}
        {currentTime.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>

      {/* Zone système */}
      <div className="flex items-center gap-3">
        <span className="hover:bg-white/10 p-1 rounded cursor-pointer">🔊</span>
        <span className="hover:bg-white/10 p-1 rounded cursor-pointer">🌐</span>
        <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer">
          <span>🔋</span>
          <span className="text-xs">100%</span>
        </div>
        <span className="hover:bg-white/10 p-1 rounded cursor-pointer">⏻</span>
      </div>
    </div>
  );
}

export default LinuxTopBar;
