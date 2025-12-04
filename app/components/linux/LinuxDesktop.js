"use client";

export const LINUX_ICONS = [
  { name: "Firefox", icon: "🦊", description: "Navigateur libre" },
  {
    name: "LibreOffice",
    icon: "📄",
    description: "Suite bureautique gratuite",
  },
  { name: "Terminal", icon: "⬛", description: "Le pouvoir à portée de main" },
  { name: "Fichiers", icon: "📁", description: "Gestionnaire de fichiers" },
  { name: "GIMP", icon: "🎨", description: "Retouche photo professionnelle" },
  { name: "VLC", icon: "🔶", description: "Lecteur multimédia universel" },
  { name: "VS Code", icon: "💻", description: "Éditeur de code" },
  { name: "Blender", icon: "🎬", description: "Création 3D" },
  { name: "System Monitor", icon: "📊", description: "Moniteur système léger" },
];

export function LinuxIcon({ name, icon, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-all group"
    >
      <span className="text-4xl group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <span className="text-white text-xs text-center mt-2">{name}</span>
      {description && (
        <span className="text-white/50 text-[10px] text-center opacity-0 group-hover:opacity-100 transition-opacity">
          {description}
        </span>
      )}
    </div>
  );
}

export function LinuxDesktop({ onIconClick }) {
  return (
    <div className="pt-12 p-4">
      <div className="grid grid-cols-4 gap-2 max-w-[350px]">
        {LINUX_ICONS.map((item, i) => (
          <LinuxIcon
            key={i}
            name={item.name}
            icon={item.icon}
            description={item.description}
            onClick={() => onIconClick?.(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default LinuxDesktop;
