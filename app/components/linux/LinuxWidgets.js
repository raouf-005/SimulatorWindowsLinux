"use client";

export function InfoWidget({
  icon,
  title,
  value,
  description,
  color = "green",
}) {
  const colorClasses = {
    green: "text-green-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
    yellow: "text-yellow-400",
    orange: "text-orange-400",
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white flex-1 min-w-[180px] hover:bg-white/15 transition-colors">
      <div className="text-xs opacity-70 mb-1 flex items-center gap-1">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <div className={`font-bold ${colorClasses[color] || colorClasses.green}`}>
        {value}
      </div>
      <div className="text-xs mt-2 opacity-70">{description}</div>
    </div>
  );
}

export function LinuxWidgets() {
  const widgets = [
    {
      icon: "🔄",
      title: "Mises à jour",
      value: "Choisies, pas subies",
      description: "Vous décidez quand et quoi mettre à jour",
      color: "green",
    },
    {
      icon: "🔒",
      title: "Données personnelles",
      value: "Stockées en local",
      description: "Respect total du RGPD",
      color: "blue",
    },
    {
      icon: "💻",
      title: "Matériel",
      value: "PC de 15 ans ? OK !",
      description: "Linux redonne vie aux vieux PC",
      color: "purple",
    },
    {
      icon: "🛡️",
      title: "Sécurité",
      value: "Open Source = Auditable",
      description: "Code vérifiable par tous",
      color: "yellow",
    },
    {
      icon: "💰",
      title: "Coût",
      value: "0€ de licences",
      description: "Tout est gratuit et légal",
      color: "orange",
    },
  ];

  return (
    <div className="flex gap-3 flex-wrap">
      {widgets.map((widget, i) => (
        <InfoWidget key={i} {...widget} />
      ))}
    </div>
  );
}

export default LinuxWidgets;
