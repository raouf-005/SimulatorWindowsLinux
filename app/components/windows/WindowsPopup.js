"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// Types de popups Windows réalistes
export const POPUP_TYPES = {
  UPDATE: {
    title: "Windows Update",
    icon: "🔄",
    color: "#0078d4",
    urgent: true,
  },
  SECURITY: {
    title: "Windows Security",
    icon: "🛡️",
    color: "#d13438",
    urgent: true,
  },
  EDGE: {
    title: "Microsoft Edge",
    icon: "🌐",
    color: "#0078d4",
    urgent: false,
  },
  OFFICE: {
    title: "Microsoft Office",
    icon: "📄",
    color: "#d24726",
    urgent: false,
  },
  ONEDRIVE: {
    title: "OneDrive",
    icon: "☁️",
    color: "#0078d4",
    urgent: false,
  },
  STORE: {
    title: "Microsoft Store",
    icon: "🛒",
    color: "#0078d4",
    urgent: false,
  },
  CORTANA: {
    title: "Cortana",
    icon: "🔵",
    color: "#00bcf2",
    urgent: false,
  },
  DEFENDER: {
    title: "Windows Defender",
    icon: "🛡️",
    color: "#107c10",
    urgent: true,
  },
};

// Messages de popup réalistes - BEAUCOUP PLUS !
export const POPUP_MESSAGES = [
  // UPDATE
  {
    type: "UPDATE",
    message:
      "Des mises à jour sont disponibles. Redémarrage requis dans 10 minutes.",
    buttons: ["Redémarrer maintenant", "Me rappeler plus tard"],
  },
  {
    type: "UPDATE",
    message:
      "Mise à jour des fonctionnalités vers Windows 11 24H2. Temps estimé : 4 heures.",
    buttons: ["Installer", "Planifier"],
  },
  {
    type: "UPDATE",
    message:
      "Votre PC redémarrera automatiquement pour terminer la mise à jour.",
    buttons: ["Redémarrer", "Différer"],
  },
  {
    type: "UPDATE",
    message:
      "⚠️ Mise à jour critique KB5034441 - Correction de 147 vulnérabilités",
    buttons: ["Installer maintenant", "Reporter (dangereux)"],
  },
  {
    type: "UPDATE",
    message:
      "Windows a besoin de plus d'espace pour les mises à jour. 15 GB requis.",
    buttons: ["Libérer de l'espace", "Ignorer"],
  },
  {
    type: "UPDATE",
    message:
      "⏰ Redémarrage planifié dans 5 minutes. Enregistrez votre travail !",
    buttons: ["Redémarrer", "Reporter de 15 min"],
  },
  // SECURITY
  {
    type: "SECURITY",
    message: "Action recommandée : Activez la protection en temps réel.",
    buttons: ["Activer", "Ignorer"],
  },
  {
    type: "SECURITY",
    message: "Analyse de sécurité requise. 47 menaces potentielles détectées.",
    buttons: ["Analyser", "Plus tard"],
  },
  {
    type: "SECURITY",
    message:
      "🚨 ALERTE ! Votre pare-feu a bloqué 234 tentatives d'intrusion aujourd'hui.",
    buttons: ["Voir les détails", "OK"],
  },
  {
    type: "SECURITY",
    message:
      "⚠️ SmartScreen a bloqué un fichier. Ce fichier pourrait endommager votre PC.",
    buttons: ["Exécuter quand même", "Ne pas exécuter"],
  },
  {
    type: "SECURITY",
    message:
      "Votre mot de passe Microsoft expire dans 3 jours. Changez-le maintenant.",
    buttons: ["Changer", "Me rappeler"],
  },
  // EDGE
  {
    type: "EDGE",
    message:
      "Microsoft Edge est 3x plus rapide que Chrome ! Faites-en votre navigateur par défaut.",
    buttons: ["Définir par défaut", "Non merci"],
  },
  {
    type: "EDGE",
    message:
      "Vos onglets vous attendent dans Edge ! Importez vos favoris maintenant.",
    buttons: ["Importer", "Ignorer"],
  },
  {
    type: "EDGE",
    message:
      "🎁 Gagnez des points Microsoft Rewards en utilisant Edge ! Jusqu'à 500€/an",
    buttons: ["Commencer", "Non merci"],
  },
  {
    type: "EDGE",
    message:
      "Edge protège mieux votre vie privée que les autres navigateurs. Essayez !",
    buttons: ["Essayer Edge", "Ignorer"],
  },
  {
    type: "EDGE",
    message:
      "📍 Edge peut remplir automatiquement vos adresses et mots de passe.",
    buttons: ["Activer", "Non"],
  },
  // OFFICE
  {
    type: "OFFICE",
    message:
      "Votre abonnement Microsoft 365 expire dans 3 jours. Renouvelez pour 99€/an.",
    buttons: ["Renouveler", "Fermer"],
  },
  {
    type: "OFFICE",
    message:
      "Nouveau ! Essayez Copilot dans Word pour 30€/mois supplémentaires.",
    buttons: ["Essayer", "Non"],
  },
  {
    type: "OFFICE",
    message:
      "📊 Excel a détecté des erreurs dans votre feuille de calcul. Voulez-vous corriger ?",
    buttons: ["Corriger", "Ignorer"],
  },
  {
    type: "OFFICE",
    message:
      "🔄 OneNote synchronise 847 notes... Cela peut prendre plusieurs minutes.",
    buttons: ["OK", "Annuler"],
  },
  {
    type: "OFFICE",
    message:
      "Teams se lance au démarrage pour ne rien manquer ! Voulez-vous le désactiver ?",
    buttons: ["Garder activé", "Désactiver"],
  },
  // ONEDRIVE
  {
    type: "ONEDRIVE",
    message:
      "Votre espace OneDrive est presque plein. Passez à 1TB pour 2€/mois.",
    buttons: ["Mettre à niveau", "Gérer"],
  },
  {
    type: "ONEDRIVE",
    message:
      "Sauvegardez vos fichiers automatiquement dans le cloud Microsoft.",
    buttons: ["Activer", "Plus tard"],
  },
  {
    type: "ONEDRIVE",
    message:
      "☁️ OneDrive a détecté 2,847 photos à sauvegarder. Upload en cours...",
    buttons: ["Voir la progression", "Annuler"],
  },
  {
    type: "ONEDRIVE",
    message:
      "⚠️ Conflit de synchronisation : 15 fichiers n'ont pas pu être synchronisés.",
    buttons: ["Résoudre", "Ignorer"],
  },
  // STORE
  {
    type: "STORE",
    message: "🎮 Candy Crush Saga GRATUIT ! Installez maintenant !",
    buttons: ["Installer", "Non merci"],
  },
  {
    type: "STORE",
    message: "Découvrez les jeux Xbox Game Pass sur PC ! 1€ le premier mois.",
    buttons: ["S'abonner", "Ignorer"],
  },
  {
    type: "STORE",
    message:
      "🔔 Disney+ est disponible sur le Microsoft Store ! Regardez Mandalorian.",
    buttons: ["Télécharger", "Plus tard"],
  },
  {
    type: "STORE",
    message: "TikTok pour Windows est arrivé ! Installez-le depuis le Store.",
    buttons: ["Installer", "Non"],
  },
  {
    type: "STORE",
    message: "📱 Instagram pour Windows - Restez connecté avec vos amis !",
    buttons: ["Obtenir", "Ignorer"],
  },
  // CORTANA
  {
    type: "CORTANA",
    message: "Cortana peut vous aider ! Activez l'assistant vocal.",
    buttons: ["Activer", "Non merci"],
  },
  {
    type: "CORTANA",
    message:
      "👋 Bonjour ! Cortana peut vous rappeler vos rendez-vous. Activez les rappels ?",
    buttons: ["Activer", "Non"],
  },
  // DEFENDER
  {
    type: "DEFENDER",
    message: "Protection désactivée ! Votre PC est en danger.",
    buttons: ["Activer maintenant", "Risquer"],
  },
  {
    type: "DEFENDER",
    message:
      "🔍 Analyse rapide terminée. 0 menaces trouvées (mais restez vigilant).",
    buttons: ["Voir le rapport", "OK"],
  },
  {
    type: "DEFENDER",
    message:
      "⚠️ Protection cloud désactivée. Activez-la pour une protection optimale.",
    buttons: ["Activer", "Ignorer"],
  },
  {
    type: "DEFENDER",
    message: "🛡️ Windows Defender a mis en quarantaine : suspicious_file.exe",
    buttons: ["Supprimer", "Restaurer"],
  },
];

export function WindowsPopup({
  id,
  message,
  type = "UPDATE",
  x,
  y,
  onClose,
  onInteract,
  zIndex = 100,
  isGlitching = false,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x, y });
  const [isHanging, setIsHanging] = useState(false);
  const popupInfo = POPUP_TYPES[type] || POPUP_TYPES.UPDATE;
  const messageData =
    typeof message === "object"
      ? message
      : { message, buttons: ["OK", "Annuler"] };

  // Simulation de freeze aléatoire
  useEffect(() => {
    if (Math.random() > 0.7) {
      const hangTimeout = setTimeout(() => {
        setIsHanging(true);
        setTimeout(() => setIsHanging(false), 1500 + Math.random() * 2000);
      }, 1000);
      return () => clearTimeout(hangTimeout);
    }
  }, []);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (isHanging) return;
    onInteract?.();
  };

  const handleClose = (e) => {
    e.stopPropagation();
    if (isHanging) return;
    onClose?.(id);
  };

  return (
    <div
      className={`absolute bg-white rounded-lg shadow-2xl overflow-hidden animate-popIn select-none
        ${isHanging ? "opacity-50 cursor-wait" : ""}
        ${isGlitching ? "animate-glitch" : ""}
        ${popupInfo.urgent ? "ring-2 ring-red-500" : ""}
      `}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        minWidth: "320px",
        maxWidth: "400px",
        zIndex: zIndex,
      }}
    >
      {/* Barre de titre */}
      <div
        className="px-3 py-2 flex items-center justify-between cursor-move"
        style={{ backgroundColor: popupInfo.color }}
        onMouseDown={() => setIsDragging(true)}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{popupInfo.icon}</span>
          <span className="text-white text-sm font-medium">
            {popupInfo.title}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleClose}
            className="text-white hover:bg-white/20 w-7 h-7 flex items-center justify-center rounded transition-colors"
            disabled={isHanging}
          >
            —
          </button>
          <button
            onClick={handleClose}
            className="text-white hover:bg-red-500 w-7 h-7 flex items-center justify-center rounded transition-colors"
            disabled={isHanging}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-4 text-gray-800">
        <p className="text-sm leading-relaxed">{messageData.message}</p>

        {/* Boutons */}
        <div className="mt-4 flex gap-2 justify-end flex-wrap">
          {messageData.buttons.map((btn, i) => (
            <button
              key={i}
              onClick={handleButtonClick}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-colors
                ${
                  i === 0
                    ? "bg-[#0078d4] text-white hover:bg-[#106ebe]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                }
                ${isHanging ? "cursor-wait opacity-50" : ""}
              `}
              disabled={isHanging}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Indicateur de "ne répond pas" */}
      {isHanging && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-xs text-gray-500">Ne répond pas...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function usePopupManager(isActive, onTriggerCrash, playSound) {
  const [popups, setPopups] = useState([]);
  const [interactionCount, setInteractionCount] = useState(0);
  const CRASH_THRESHOLD = 6; // Nombre d'interactions avant crash possible

  // Stocker la ref pour éviter les re-renders
  const crashRef = useRef(onTriggerCrash);
  crashRef.current = onTriggerCrash;

  // Timer de 1min max avant crash automatique
  useEffect(() => {
    if (!isActive) return;

    const maxTimeBeforeCrash = setTimeout(() => {
      crashRef.current?.();
    }, 60000); // 60 secondes = 1min

    return () => clearTimeout(maxTimeBeforeCrash);
  }, [isActive]);

  // Générer des popups périodiquement
  useEffect(() => {
    if (!isActive) return;

    const spawnPopup = () => {
      const messageData =
        POPUP_MESSAGES[Math.floor(Math.random() * POPUP_MESSAGES.length)];
      const newPopup = {
        id: Date.now() + Math.random(),
        type: messageData.type,
        message: messageData,
        x: Math.random() * 60 + 5,
        y: Math.random() * 60 + 5,
        zIndex: 100 + popups.length,
      };

      setPopups((prev) => [...prev, newPopup]);
      playSound?.();
    };

    // Premier popup après 4 secondes
    const initialTimeout = setTimeout(spawnPopup, 4000);

    // Deuxième popup après 8 secondes
    const secondTimeout = setTimeout(spawnPopup, 8000);

    // Puis toutes les 5-8 secondes (beaucoup plus de temps pour interagir)
    const interval = setInterval(() => {
      spawnPopup();
      // Très rarement spawn 2 popups d'un coup
      if (Math.random() > 0.9) {
        setTimeout(spawnPopup, 800);
      }
    }, 5000 + Math.random() * 3000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(secondTimeout);
      clearInterval(interval);
    };
  }, [isActive, playSound]);

  const closePopup = useCallback((id) => {
    setInteractionCount((prev) => {
      const newCount = prev + 1;
      // 50% de chance de crash après le seuil
      if (newCount >= CRASH_THRESHOLD && Math.random() > 0.5) {
        crashRef.current?.();
      }
      return newCount;
    });
    setPopups((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const handleInteract = useCallback(() => {
    setInteractionCount((prev) => {
      const newCount = prev + 1;
      // Crash garanti si on dépasse le seuil + 2
      if (newCount >= CRASH_THRESHOLD + 2) {
        crashRef.current?.();
      }
      return newCount;
    });
  }, []);

  return {
    popups,
    closePopup,
    handleInteract,
    interactionCount,
  };
}

export default WindowsPopup;
