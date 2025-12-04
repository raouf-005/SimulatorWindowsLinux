"use client";

import { useState, useEffect } from "react";

export function WindowsTaskbar({ time, cpuUsage = 98, isResponding = true }) {
  const [currentTime, setCurrentTime] = useState(time || new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#1f1f1f]/95 backdrop-blur-sm flex items-center px-2 z-50 border-t border-white/10">
      {/* Bouton Start */}
      <button className="w-12 h-10 bg-transparent hover:bg-white/10 rounded flex items-center justify-center text-white text-2xl transition-colors">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
        </svg>
      </button>

      {/* Barre de recherche */}
      <div className="ml-2 flex items-center bg-[#2d2d2d] rounded px-3 py-1.5 w-64">
        <span className="text-white/50 text-sm">🔍</span>
        <span className="text-white/50 text-sm ml-2">Rechercher...</span>
      </div>

      {/* Icônes de la barre des tâches */}
      <div className="flex items-center ml-2 gap-1">
        <TaskbarIcon icon="📁" tooltip="Explorateur" />
        <TaskbarIcon icon="🌐" tooltip="Edge" active />
        <TaskbarIcon icon="📧" tooltip="Mail" />
        <TaskbarIcon icon="🛒" tooltip="Store" notification />
      </div>

      {/* Espaceur */}
      <div className="flex-1" />

      {/* Zone de notification (System Tray) */}
      <div className="flex items-center gap-1 px-2 py-1 hover:bg-white/10 rounded">
        <span className="text-white/70 text-xs">^</span>
      </div>

      <div className="flex items-center gap-3 text-white text-xs px-3 py-1 hover:bg-white/10 rounded">
        <TrayIcon icon="🔊" />
        <TrayIcon icon="🌐" />
        <div className="flex items-center gap-1">
          <span className={cpuUsage > 80 ? "text-red-400" : "text-white"}>
            🔋
          </span>
          <span className="text-white/70">
            {100 - Math.floor(cpuUsage / 10)}%
          </span>
        </div>
      </div>

      {/* Horloge */}
      <div className="flex flex-col items-end px-3 py-1 hover:bg-white/10 rounded text-white text-xs">
        <span>
          {currentTime.toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <span className="text-white/70">
          {currentTime.toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Bouton Afficher le bureau */}
      <div className="w-1 h-full bg-white/20 hover:bg-white/40 cursor-pointer" />

      {/* Indicateur de non-réponse */}
      {!isResponding && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <span className="text-white text-xs">Ne répond pas...</span>
        </div>
      )}
    </div>
  );
}

function TaskbarIcon({ icon, tooltip, active = false, notification = false }) {
  return (
    <div
      className={`
      relative w-10 h-10 flex items-center justify-center rounded
      hover:bg-white/10 cursor-pointer transition-colors
      ${active ? "bg-white/10" : ""}
    `}
    >
      <span className="text-xl">{icon}</span>
      {active && (
        <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded" />
      )}
      {notification && (
        <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
      )}
    </div>
  );
}

function TrayIcon({ icon }) {
  return (
    <span className="text-base hover:opacity-80 cursor-pointer">{icon}</span>
  );
}

export default WindowsTaskbar;
