"use client";

import { useState, useEffect } from "react";

const CODE_EXAMPLES = [
  {
    title: "Mise à jour système",
    code: `# Mise à jour optionnelle et contrôlée
$ sudo apt update
$ sudo apt upgrade

Voulez-vous continuer ? [O/n] _
# VOUS décidez quand mettre à jour`,
  },
  {
    title: "Installation de logiciels",
    code: `# Installation gratuite et légale
$ sudo apt install firefox gimp vlc

Téléchargement... 100%
Installation... Terminé !

# 0€ de licence. Toujours.`,
  },
  {
    title: "Vérification sécurité",
    code: `# Code source ouvert et vérifiable
$ cat /etc/os-release

NAME="Ubuntu"
VERSION="24.04 LTS"
SECURITY="Vérifié par la communauté"

# Pas de backdoor, code auditable`,
  },
  {
    title: "Gestion des données",
    code: `# Vos données restent CHEZ VOUS
$ ls ~/Documents

rapport.odt
photos/
projets/

# Aucune télémétrie par défaut
# Respect total du RGPD`,
  },
  {
    title: "Support matériel",
    code: `# PC de 2010 ? No problemo !
$ neofetch

OS: Linux Mint 21
Kernel: 6.5.0
Uptime: 47 days
Memory: 512MB / 4GB

# Ressuscite les vieux PC`,
  },
];

export function LinuxTerminal({ isOpen = true, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const [typedCode, setTypedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentCode = CODE_EXAMPLES[activeTab].code;
    setTypedCode("");
    setIsTyping(true);

    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < currentCode.length) {
        setTypedCode(currentCode.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 20);

    return () => clearInterval(typeInterval);
  }, [activeTab]);

  if (!isOpen) return null;

  return (
    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-gray-700 w-full max-w-2xl">
      {/* Barre de titre */}
      <div className="bg-[#323232] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"
            />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-white/70 text-sm ml-2">Terminal — bash</span>
        </div>
      </div>

      {/* Onglets */}
      <div className="bg-[#2d2d2d] flex gap-1 px-2 py-1 overflow-x-auto">
        {CODE_EXAMPLES.map((example, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-3 py-1 text-xs rounded transition-colors whitespace-nowrap
              ${
                activeTab === i
                  ? "bg-[#1e1e1e] text-white"
                  : "text-white/50 hover:text-white/80"
              }
            `}
          >
            {example.title}
          </button>
        ))}
      </div>

      {/* Contenu du terminal */}
      <div className="p-4 font-mono text-sm text-green-400 min-h-[200px] max-h-[300px] overflow-auto">
        <pre className="whitespace-pre-wrap">
          {typedCode}
          {isTyping && <span className="animate-pulse">▊</span>}
        </pre>
      </div>

      {/* Barre d'info */}
      <div className="bg-[#007acc] px-4 py-1 text-white text-xs flex justify-between">
        <span>🐧 Linux - Le système qui respecte vos libertés</span>
        <span>UTF-8 | bash</span>
      </div>
    </div>
  );
}

export default LinuxTerminal;
