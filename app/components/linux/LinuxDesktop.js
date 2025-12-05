"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---
// We split icons into "Dock Apps" and "Desktop Files" for realism
export const DOCK_APPS = [
  { name: "Firefox", icon: "🦊", color: "bg-orange-500/10" },
  { name: "Terminal", icon: "💻", color: "bg-gray-500/10" },
  { name: "VS Code", icon: "📝", color: "bg-blue-500/10" },
  { name: "Files", icon: "📁", color: "bg-blue-400/10" },
  { name: "Spotify", icon: "🎧", color: "bg-green-500/10" },
];

export const DESKTOP_FILES = [
  { name: "project_nird", icon: "📁", type: "folder" },
  { name: "main.rs", icon: "🦀", type: "file" },
  { name: "passwords.txt", icon: "📄", type: "file" },
  { name: "config.json", icon: "⚙️", type: "config" },
  { name: "screenshot.png", icon: "🖼️", type: "image" },
  { name: "Trash", icon: "🗑️", type: "trash" },
];

// --- SUB-COMPONENTS ---

function TopBar() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 w-full bg-[#1a1b26]/90 backdrop-blur-md text-gray-200 flex items-center justify-between px-4 text-xs font-medium select-none z-50 border-b border-white/5 relative shadow-sm">
      {/* Left: Activities & App Name */}
      <div className="flex items-center gap-4">
        <div className="group cursor-pointer flex items-center gap-2 hover:bg-white/10 px-3 py-1 rounded-full transition-colors">
          <span className="text-lg">🐧</span>
          <span className="font-bold tracking-wide">Activities</span>
        </div>
        <span className="text-white/50">Terminal</span>
      </div>

      {/* Center: Clock */}
      <div className="absolute left-1/2 -translate-x-1/2 font-bold tracking-wide cursor-pointer hover:bg-white/10 px-4 py-1 rounded-full transition-colors">
        {date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
        <span className="mx-2 opacity-50">|</span>
        {date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </div>

      {/* Right: System Tray */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-3 px-3 py-1 hover:bg-white/10 rounded-full cursor-pointer transition-colors">
          <span className="text-[10px]">FR</span>
          <span>▼</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-1 hover:bg-white/10 rounded-full cursor-pointer transition-colors">
          <span>📡</span>
          <span>🔈</span>
          <span>🔋</span>
          <span className="ml-1">▼</span>
        </div>
      </div>
    </div>
  );
}

function ConkyWidget() {
  return (
    <div className="absolute right-10 top-20 text-white/60 font-mono text-[10px] sm:text-xs pointer-events-none select-none text-right leading-relaxed z-0">
      <div className="mb-4">
        <h3 className="text-white font-bold text-sm border-b border-white/20 pb-1 mb-2 inline-block">
          SYSTEM
        </h3>
        <p>
          OS: <span className="text-blue-400">NIRD Linux 24.04</span>
        </p>
        <p>
          KERNEL: <span className="text-green-400">6.8.0-generic</span>
        </p>
        <p>
          UPTIME: <span className="text-yellow-400">12d 4h 21m</span>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-white font-bold text-sm border-b border-white/20 pb-1 mb-2 inline-block">
          CPU
        </h3>
        <p>USAGE: [|||.......] 12%</p>
        <p>FREQ: 3.2GHz</p>
        <p>TEMP: 42°C</p>
      </div>

      <div>
        <h3 className="text-white font-bold text-sm border-b border-white/20 pb-1 mb-2 inline-block">
          MEMORY
        </h3>
        <p>RAM: [||||......] 4.2G</p>
        <p>SWAP: [..........] 0%</p>
      </div>
    </div>
  );
}

function Dock({ onIconClick }) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end gap-2 px-3 py-2 bg-[#1a1b26]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
        {DOCK_APPS.map((app, i) => (
          <DockIcon key={i} app={app} onClick={() => onIconClick(app)} />
        ))}
        {/* Separator */}
        <div className="w-px h-8 bg-white/10 mx-2 self-center" />
        <DockIcon
          app={{ name: "App Grid", icon: "⋮⋮⋮", color: "bg-transparent" }}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

function DockIcon({ app, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative flex flex-col items-center cursor-pointer p-2"
    >
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg border border-white/5 ${app.color} transition-all duration-300 group-hover:bg-white/20`}
      >
        {app.icon}
      </div>

      {/* Tooltip */}
      <span className="absolute -top-12 px-2 py-1 bg-[#1a1b26] text-white text-[10px] rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {app.name}
      </span>

      {/* Active Indicator Dot */}
      <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

function DesktopFile({ item, isSelected, onClick }) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`
                flex flex-col items-center justify-center w-24 p-2 rounded-lg cursor-pointer border border-transparent
                ${
                  isSelected
                    ? "bg-blue-500/30 border-blue-400/50 backdrop-blur-sm"
                    : "hover:bg-white/5 hover:border-white/5"
                }
            `}
    >
      <span className="text-4xl mb-2 drop-shadow-xl">{item.icon}</span>
      <span
        className={`
                text-[11px] text-center px-1.5 py-0.5 rounded leading-tight
                ${isSelected ? "text-white" : "text-gray-200 text-shadow"}
            `}
      >
        {item.name}
      </span>
    </div>
  );
}

// --- MAIN COMPONENT ---

export function LinuxDesktop({ onIconClick }) {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div
      className="relative w-full h-full bg-[#0f0f12] overflow-hidden font-sans select-none"
      onClick={() => setSelectedFile(null)}
    >
      {/* 1. Wallpaper (Abstract/Nord Theme) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')`,
        }}
      />
      {/* Wallpaper overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* 2. Top Bar (GNOME) */}
      <TopBar />

      {/* 3. Conky Widget (System Monitor) */}
      <ConkyWidget />

      {/* 4. Desktop Surface (Files) */}
      <div className="relative z-10 p-6 flex flex-col flex-wrap content-start gap-4 h-[calc(100%-4rem)] max-w-[500px]">
        {DESKTOP_FILES.map((item, i) => (
          <DesktopFile
            key={i}
            item={item}
            isSelected={selectedFile === i}
            onClick={() => {
              setSelectedFile(i);
              onIconClick && onIconClick(item);
            }}
          />
        ))}
      </div>

      {/* 5. Floating Dock */}
      <Dock onIconClick={onIconClick} />
    </div>
  );
}

export default LinuxDesktop;
