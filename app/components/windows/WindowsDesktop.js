"use client";

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
  { name: "Task Manager", icon: "📊", bloatware: false }, // Accès au Task Manager
  { name: "Feedback Hub", icon: "💭", bloatware: true },
  { name: "Tips", icon: "💡", bloatware: true },
  { name: "Weather", icon: "🌤️", bloatware: true },
  { name: "Paramètres", icon: "⚙️", bloatware: false },
  { name: "Get Help", icon: "❓", bloatware: true },
];

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
        flex flex-col items-center justify-center p-2 rounded 
        hover:bg-white/10 cursor-pointer transition-all
        ${isLoading ? "animate-pulse" : ""}
        ${bloatware ? "opacity-80" : ""}
      `}
    >
      <span className="text-4xl drop-shadow-lg">{icon}</span>
      <span className="text-white text-xs text-center mt-1 drop-shadow-lg max-w-[70px] truncate">
        {name}
      </span>
      {isLoading && (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mt-1" />
      )}
    </div>
  );
}

export function WindowsDesktop({ onIconClick, isLagging = false }) {
  return (
    <div
      className={`p-4 grid grid-cols-4 sm:grid-cols-6 gap-1 max-w-[500px] ${
        isLagging ? "pointer-events-none" : ""
      }`}
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
  );
}

export default WindowsDesktop;
