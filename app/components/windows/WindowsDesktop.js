"use client";

import { useState, useEffect } from "react";

// --- DATA (Unchanged) ---
export const DESKTOP_ICONS = [
  { name: "Candy Crush", icon: "🍬", bloatware: true },
  { name: "Microsoft Edge", icon: "🌐", bloatware: true },
  { name: "Cortana", icon: "🔵", bloatware: true },
  { name: "OneDrive", icon: "☁️", bloatware: true },
  { name: "Xbox Console", icon: "🎮", bloatware: true },
  { name: "Publicités", icon: "📢", bloatware: true },
  { name: "Skype", icon: "💬", bloatware: true },
  { name: "Microsoft Store", icon: "🛒", bloatware: true },
  { name: "Solitaire", icon: "🃏", bloatware: true },
  { name: "Groove Music", icon: "🎵", bloatware: true },
  { name: "Films & TV", icon: "🎬", bloatware: true },
  { name: "3D Builder", icon: "🔷", bloatware: true },
  { name: "Mixed Reality", icon: "🥽", bloatware: true },
  { name: "Your Phone", icon: "📱", bloatware: true },
  { name: "Task Manager", icon: "📊", bloatware: false },
  { name: "Feedback Hub", icon: "💭", bloatware: true },
  { name: "Tips", icon: "💡", bloatware: true },
  { name: "Weather", icon: "🌤️", bloatware: true },
  { name: "Paramètres", icon: "⚙️", bloatware: false },
  { name: "Get Help", icon: "❓", bloatware: true },
];

// --- SUB-COMPONENTS (Visual Only) ---

function Taskbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute bottom-0 w-full h-10 bg-[#101010]/95 backdrop-blur-md flex items-center justify-between z-50 select-none border-t border-white/10">
      {/* Start & Search */}
      <div className="flex items-center h-full">
        <div className="w-12 h-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-default">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M0 3.449L9.25 2.15v9.332H0V3.449zm9.25 10.848l-9.25 1.282v7.972h9.25v-9.254zm1.5 0v9.45l13.25 1.802V14.15l-13.25.147zm13.25-12l-13.25 1.76v9.404h13.25V2.297z" />
          </svg>
        </div>
        <div className="hidden sm:flex items-center bg-white h-full w-64 px-3 border-y-4 border-[#101010]">
          <span className="text-gray-500 text-sm">Type here to search</span>
        </div>
        <div className="w-12 h-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-default">
          <span className="text-white text-lg">○</span>
        </div>
        <div className="w-12 h-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-default">
          <span className="text-white text-lg">□</span>
        </div>
      </div>

      {/* System Tray */}
      <div className="flex items-center h-full px-2 gap-1">
        <div className="px-2 h-full flex items-center hover:bg-white/10 cursor-default text-xs text-white">
          ^
        </div>
        <div className="flex flex-col items-end justify-center h-full hover:bg-white/10 px-2 cursor-default text-white">
          <span className="text-[11px] leading-tight">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span className="text-[11px] leading-tight">
            {time.toLocaleDateString([], {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="w-1 h-full border-l border-gray-600 ml-2"></div>
      </div>
    </div>
  );
}

// --- MAIN COMPONENTS ---

export function DesktopIcon({
  name,
  icon,
  onClick,
  isLoading = false,
  bloatware = false,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        group flex flex-col items-center justify-start p-2 w-[86px] h-[100px]
        border border-transparent hover:bg-white/10 hover:border-white/5 
        active:bg-white/20 active:border-white/10 rounded-[2px]
        cursor-default transition-all mb-2
        ${isLoading ? "animate-pulse" : ""}
        ${bloatware ? "opacity-90" : ""}
      `}
    >
      <div className="relative mb-1">
        <span className="text-4xl drop-shadow-2xl filter">{icon}</span>
        {isLoading && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin bg-white/10" />
        )}
      </div>

      <span className="text-white text-[11px] text-center leading-tight drop-shadow-md line-clamp-2 px-1 text-shadow-sm shadow-black group-hover:line-clamp-none">
        {name}
      </span>

      {/* Shortcut Arrow graphic for realism */}
      <div className="absolute top-8 left-6 bg-white rounded-[2px] w-3 h-3 flex items-center justify-center shadow-sm pointer-events-none">
        <svg
          viewBox="0 0 24 24"
          className="w-3 h-3 text-blue-900 fill-current -rotate-45"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </div>
    </div>
  );
}

export function WindowsDesktop({ onIconClick, isLagging = false }) {
  return (
    <div className="relative w-full h-full overflow-hidden font-sans select-none">
      {/* 1. Wallpaper (Windows 10 Hero) */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none z-0"
        style={{
          backgroundImage: `url('https://4kwallpapers.com/images/wallpapers/windows-10-hero-dark-blue-stock-official-original-3840x2160-2527.jpg')`,
        }}
      />

      {/* 2. Desktop Grid Area */}
      <div
        className={`
            absolute inset-0 p-2 flex flex-col flex-wrap content-start items-start gap-1 pb-12
            ${
              isLagging ? "pointer-events-none cursor-wait grayscale-[0.5]" : ""
            }
        `}
      >
        {DESKTOP_ICONS.map((item, i) => (
          <DesktopIcon
            key={i}
            name={item.name}
            icon={item.icon}
            bloatware={item.bloatware}
            onClick={() => onIconClick?.(item)}
          />
        ))}
      </div>

      {/* 3. Watermark (Satire/Realism) */}
      <div className="absolute bottom-14 right-4 text-white/30 text-right pointer-events-none font-sans z-0">
        <p className="text-sm font-normal">Activate Windows</p>
        <p className="text-xs">Go to Settings to activate Windows.</p>
      </div>

      {/* 4. Taskbar */}
      <Taskbar />

      {/* 5. "Not Responding" Overlay when lagging */}
      {isLagging && (
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] z-50 flex items-center justify-center cursor-wait">
          <div className="bg-white p-6 border border-gray-400 shadow-xl rounded-sm">
            <div className="flex items-center gap-3">
              <div className="text-3xl">⏳</div>
              <div>
                <h3 className="font-bold text-sm">Windows Explorer</h3>
                <p className="text-xs text-gray-500">
                  Microsoft Windows is not responding
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WindowsDesktop;
