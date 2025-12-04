"use client";

import { useState, useEffect } from "react";

export function SystemMonitor({
  cpuUsage = 98,
  memoryUsage = 87,
  diskUsage = 95,
  fanSpeed = "MAX",
  isHealthy = false,
}) {
  const [animatedCpu, setAnimatedCpu] = useState(cpuUsage);

  // Faire fluctuer le CPU de manière réaliste
  useEffect(() => {
    if (!isHealthy) {
      const interval = setInterval(() => {
        setAnimatedCpu((prev) => {
          const fluctuation = (Math.random() - 0.3) * 10;
          return Math.min(100, Math.max(80, prev + fluctuation));
        });
      }, 500);
      return () => clearInterval(interval);
    } else {
      setAnimatedCpu(cpuUsage);
    }
  }, [isHealthy, cpuUsage]);

  if (isHealthy) {
    return (
      <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm flex items-center gap-3 flex-wrap">
        <span>✅ Système stable</span>
        <span>•</span>
        <span>🌡️ CPU: {Math.floor(animatedCpu)}%</span>
        <span>•</span>
        <span>💾 RAM: 23%</span>
        <span>•</span>
        <span>🔇 Ventilateur: Silencieux</span>
      </div>
    );
  }

  return (
    <div className="bg-black/50 text-white px-4 py-2 rounded-lg text-xs flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-1">
        <span className="animate-spin">🌀</span>
        <span>Ventilateur: {fanSpeed}</span>
      </div>
      <span>•</span>
      <span
        className={
          animatedCpu > 90 ? "text-red-400 font-bold" : "text-yellow-400"
        }
      >
        🔥 CPU: {Math.floor(animatedCpu)}%
      </span>
      <span>•</span>
      <span className={memoryUsage > 85 ? "text-red-400" : "text-yellow-400"}>
        💾 RAM: {memoryUsage}%
      </span>
      <span>•</span>
      <span className={diskUsage > 90 ? "text-red-400" : "text-yellow-400"}>
        💿 Disque: {diskUsage}%
      </span>
    </div>
  );
}

export default SystemMonitor;
