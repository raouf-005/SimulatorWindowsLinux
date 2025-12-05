"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INTERACTIVE_SCENARIOS = [
  {
    id: "update",
    title: "🔄 Mise à jour système",
    initialOutput: [
      "user@linux:~$ sudo apt update",
      "Atteint:1 http://archive.ubuntu.com/ubuntu jammy InRelease",
      "Atteint:2 http://security.ubuntu.com/ubuntu jammy-security InRelease",
      "Lecture des listes de paquets... Fait",
      "Construction de l'arbre des dépendances... Fait",
      "",
      "142 paquets peuvent être mis à jour. Exécutez « apt list --upgradable »",
      "",
    ],
    question: "Exécuter la mise à jour ? [O/n]",
    hasProgressAnimation: true,
    packages: [
      { name: "firefox", size: "67.2 MB", version: "120.0" },
      { name: "libssl3", size: "2.1 MB", version: "3.0.11" },
      { name: "linux-image-6.5.0", size: "89.4 MB", version: "6.5.0-14" },
      { name: "nodejs", size: "31.8 MB", version: "20.10.0" },
      { name: "python3", size: "5.6 MB", version: "3.11.6" },
    ],
    choices: [
      {
        key: "o",
        label: "Oui, mettre à jour",
        triggerAnimation: true,
        finalResponse: [
          "",
          "✅ 142 paquets mis à jour avec succès !",
          "",
          "# 🎉 VOUS contrôlez vos mises à jour",
          "# Pas de redémarrage forcé à 3h du matin !",
          "# Votre système est à jour et sécurisé.",
        ],
      },
      {
        key: "n",
        label: "Non, pas maintenant",
        response: [
          "Abandon.",
          "",
          "# ✨ C'est VOTRE choix !",
          "# Mettez à jour quand VOUS le décidez",
          "# Pas quand Microsoft le décide.",
        ],
      },
    ],
  },
  {
    id: "install",
    title: "📦 Installation de logiciels",
    initialOutput: [
      "user@linux:~$ apt search office",
      "libreoffice - Suite bureautique complète",
      "onlyoffice - Suite collaborative",
      "calligra - Suite KDE",
      "",
    ],
    question: "Installer LibreOffice gratuitement ? [O/n]",
    choices: [
      {
        key: "o",
        label: "Oui, installer",
        response: [
          "user@linux:~$ sudo apt install libreoffice",
          "Téléchargement de libreoffice...",
          "████████████████████ 100%",
          "Installation...",
          "✅ LibreOffice installé !",
          "",
          "# 💰 Économie : 150€/an de licence Office",
          "# 🔓 100% compatible avec les fichiers Microsoft",
        ],
      },
      {
        key: "n",
        label: "Non merci",
        response: [
          "D'accord, pas de problème !",
          "",
          "# 📝 Vous pouvez aussi essayer :",
          "# - OnlyOffice (gratuit)",
          "# - Google Docs (en ligne)",
          "# - Cryptpad (chiffré)",
        ],
      },
    ],
  },
  {
    id: "customize",
    title: "🎨 Personnalisation",
    initialOutput: [
      "user@linux:~$ ls /usr/share/themes/",
      "Adwaita  Arc-Dark  Dracula  Nord  Catppuccin",
      "",
      "user@linux:~$ ls /usr/share/icons/",
      "Papirus  Numix  Flat-Remix  Tela",
      "",
    ],
    question: "Changer le thème du bureau ? [O/n]",
    choices: [
      {
        key: "o",
        label: "Oui, personnaliser !",
        response: [
          "user@linux:~$ gsettings set org.gnome.desktop.interface gtk-theme 'Dracula'",
          "Thème appliqué : Dracula 🧛",
          "",
          "# 🎨 LIBERTÉ TOTALE de personnalisation",
          "# Changez les icônes, les polices, les couleurs...",
          "# Votre PC, VOS règles !",
          "",
          "# 💡 Commentaire : Sous Windows, vous payez",
          "# pour des thèmes basiques. Ici, tout est gratuit !",
        ],
      },
      {
        key: "n",
        label: "Garder le défaut",
        response: [
          "Le thème par défaut est conservé.",
          "",
          "# 👌 Pas de souci ! Vous pouvez changer",
          "# d'avis à tout moment.",
          "# Votre système, votre choix !",
        ],
      },
    ],
  },
  {
    id: "privacy",
    title: "🔒 Vie privée",
    initialOutput: [
      "user@linux:~$ cat /etc/telemetry.conf",
      "cat: /etc/telemetry.conf: Aucun fichier",
      "",
      "# 🎉 Pas de fichier de télémétrie !",
      "# Linux ne vous espionne pas par défaut.",
      "",
    ],
    question: "Vérifier les connexions réseau ? [O/n]",
    choices: [
      {
        key: "o",
        label: "Oui, vérifier",
        response: [
          "user@linux:~$ ss -tuln | grep ESTABLISHED",
          "",
          "# 🔍 Connexions actives : Seulement VOS apps",
          "# Aucune connexion vers Microsoft",
          "# Aucune connexion vers des serveurs publicitaires",
          "",
          "# 🛡️ VOTRE vie privée est respectée",
          "# Contrairement à Windows qui envoie",
          "# vos données à Microsoft en permanence",
        ],
      },
      {
        key: "n",
        label: "Non, je fais confiance",
        response: [
          "# 👍 Et vous avez raison de faire confiance !",
          "# Le code source est ouvert et auditable",
          "# Des millions de développeurs vérifient",
          "",
          "# 💪 La sécurité par la transparence",
        ],
      },
    ],
  },
];

export function LinuxTerminal({ isOpen = true, onClose }) {
  const [activeScenario, setActiveScenario] = useState(0);
  const [output, setOutput] = useState([]);
  const [isTyping, setIsTyping] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateProgress, setUpdateProgress] = useState(0);
  const [currentPackage, setCurrentPackage] = useState(null);
  const [packageIndex, setPackageIndex] = useState(0);

  const scenario = INTERACTIVE_SCENARIOS[activeScenario];

  // Reset et taper le texte initial
  useEffect(() => {
    setOutput([]);
    setShowQuestion(false);
    setAnswered(false);
    setIsTyping(true);
    setTypingIndex(0);
    setIsUpdating(false);
    setUpdateProgress(0);
    setCurrentPackage(null);
    setPackageIndex(0);
  }, [activeScenario]);

  // Animation de frappe ligne par ligne
  useEffect(() => {
    if (!isTyping || answered) return;

    if (typingIndex < scenario.initialOutput.length) {
      const timeout = setTimeout(() => {
        setOutput((prev) => [...prev, scenario.initialOutput[typingIndex]]);
        setTypingIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      setTimeout(() => setShowQuestion(true), 300);
    }
  }, [typingIndex, isTyping, scenario, answered]);

  const handleChoice = useCallback(
    (choice) => {
      setAnswered(true);
      setShowQuestion(false);

      // Ajouter la réponse utilisateur
      setOutput((prev) => [...prev, `> ${choice.label}`, ""]);

      // Si c'est une mise à jour avec animation
      if (choice.triggerAnimation && scenario.packages) {
        setIsUpdating(true);
        setOutput((prev) => [...prev, "user@linux:~$ sudo apt upgrade -y", ""]);

        // Démarrer l'animation de mise à jour
        let pkgIdx = 0;
        const packages = [...scenario.packages]; // Copie pour éviter les problèmes de closure
        const totalPackages = packages.length;

        const updateNextPackage = () => {
          if (pkgIdx < totalPackages) {
            const currentPkg = packages[pkgIdx];
            if (!currentPkg) return; // Protection supplémentaire

            setCurrentPackage(currentPkg);
            setPackageIndex(pkgIdx);
            setUpdateProgress(0);

            // Animer la progression
            let progress = 0;
            const currentIdx = pkgIdx; // Capturer l'index actuel
            const progressInterval = setInterval(() => {
              progress += Math.random() * 15 + 5;
              if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);

                // Ajouter le log de succès pour ce package
                const pkg = packages[currentIdx];
                if (pkg) {
                  setOutput((prev) => [
                    ...prev,
                    `✓ ${pkg.name} (${pkg.version}) installé`,
                  ]);
                }

                pkgIdx++;
                setTimeout(updateNextPackage, 200);
              }
              setUpdateProgress(Math.min(progress, 100));
            }, 100);
          } else {
            // Terminé - ajouter les messages finaux
            setIsUpdating(false);
            setCurrentPackage(null);

            if (choice.finalResponse) {
              let idx = 0;
              const addFinalLine = () => {
                if (idx < choice.finalResponse.length) {
                  setOutput((prev) => [...prev, choice.finalResponse[idx]]);
                  idx++;
                  setTimeout(addFinalLine, 100);
                }
              };
              setTimeout(addFinalLine, 300);
            }
          }
        };

        setTimeout(updateNextPackage, 500);
      } else {
        // Réponse normale sans animation
        let index = 0;
        const addLine = () => {
          if (index < choice.response.length) {
            setOutput((prev) => [...prev, choice.response[index]]);
            index++;
            setTimeout(addLine, 100);
          }
        };
        setTimeout(addLine, 300);
      }
    },
    [scenario]
  );

  const nextScenario = useCallback(() => {
    setActiveScenario((prev) => (prev + 1) % INTERACTIVE_SCENARIOS.length);
  }, []);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="bg-[#1a1b26] rounded-xl overflow-hidden shadow-2xl border border-purple-500/30 w-full max-w-2xl"
    >
      {/* Barre de titre */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
            />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-white/90 text-sm font-medium">
            🐧 Terminal Linux — Interactif
          </span>
        </div>
        <span className="text-purple-300 text-xs">bash 5.2</span>
      </div>

      {/* Onglets des scénarios */}
      <div className="bg-[#24283b] flex gap-1 px-2 py-1.5 overflow-x-auto border-b border-purple-500/20">
        {INTERACTIVE_SCENARIOS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveScenario(i)}
            className={`px-3 py-1.5 text-xs rounded-lg transition-all whitespace-nowrap font-medium
              ${
                activeScenario === i
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }
            `}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Contenu du terminal */}
      <div className="p-4 font-mono text-sm min-h-[280px] max-h-[350px] overflow-auto bg-[#1a1b26]">
        {output.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className={`${
              line.startsWith("#")
                ? "text-gray-500"
                : line.startsWith("user@")
                ? "text-green-400"
                : line.startsWith(">")
                ? "text-yellow-400 font-bold"
                : line.startsWith("✅")
                ? "text-green-400"
                : line.startsWith("💰") ||
                  line.startsWith("🎉") ||
                  line.startsWith("💡")
                ? "text-purple-400"
                : line.includes("████")
                ? "text-cyan-400"
                : "text-gray-300"
            }`}
          >
            {line || "\u00A0"}
          </motion.div>
        ))}

        {isTyping && <span className="text-green-400 animate-pulse">▊</span>}

        {/* Animation de mise à jour interactive */}
        {isUpdating && currentPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 mb-2 p-3 bg-[#24283b] rounded-lg border border-purple-500/20"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-cyan-400 text-xs">
                📦 Téléchargement de {currentPackage.name}...
              </span>
              <span className="text-gray-500 text-xs">
                {currentPackage.size}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                initial={{ width: 0 }}
                animate={{ width: `${updateProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-400 text-xs">
                Version: {currentPackage.version}
              </span>
              <span className="text-green-400 text-xs font-mono">
                {Math.round(updateProgress)}%
              </span>
            </div>
            <div className="mt-2 text-gray-500 text-xs">
              Package {packageIndex + 1} / {scenario.packages?.length || 0}
            </div>
          </motion.div>
        )}

        {/* Question interactive */}
        <AnimatePresence>
          {showQuestion && !answered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 space-y-3"
            >
              <div className="text-yellow-400 font-bold flex items-center gap-2">
                <span className="animate-pulse">❯</span>
                {scenario.question}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {scenario.choices.map((choice) => (
                  <motion.button
                    key={choice.key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleChoice(choice)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-500/20"
                  >
                    [{choice.key.toUpperCase()}] {choice.label}
                  </motion.button>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-2">
                💡 Cliquez sur un bouton ou appuyez sur la touche correspondante
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bouton suivant après réponse */}
        {answered && !isUpdating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 pt-4 border-t border-purple-500/20"
          >
            <button
              onClick={nextScenario}
              className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-medium transition-colors"
            >
              ➡️ Scénario suivant
            </button>
          </motion.div>
        )}
      </div>

      {/* Barre d'info */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1.5 text-white text-xs flex justify-between items-center">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          🐧 Linux — Vous êtes libre de personnaliser comme vous voulez !
        </span>
        <span className="text-purple-200">UTF-8 | bash</span>
      </div>
    </motion.div>
  );
}

export default LinuxTerminal;
