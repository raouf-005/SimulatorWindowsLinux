"use client";

import { useState, useEffect, useCallback } from "react";
import {
  WindowsPopup,
  usePopupManager,
  WindowsDesktop,
  WindowsTaskbar,
  BlueScreenOfDeath,
  LinuxDesktop,
  LinuxTopBar,
  LinuxTerminal,
  LinuxWidgets,
  BudgetCounter,
  NotificationStack,
  SystemMonitor,
  TransitionScreen,
  LaggyMouse,
  useSlowdown,
  useMoneyDrain,
  useSoundManager,
  WindowsTaskManager,
  LinuxTaskManager,
  IntroScreen,
  EndingScreen,
} from "./components";

// États du jeu
const MODES = {
  INTRO: "intro",
  WINDOWS: "windows",
  BLUESCREEN: "bluescreen",
  TRANSITION: "transition",
  LINUX: "linux",
  ENDING: "ending",
};

export default function Home() {
  const [mode, setMode] = useState(MODES.INTRO);
  const [notifications, setNotifications] = useState([]);
  const [linuxNotifications, setLinuxNotifications] = useState([]);
  const [showTerminal, setShowTerminal] = useState(true);
  const [showTaskManager, setShowTaskManager] = useState(false);
  const [showLinuxMonitor, setShowLinuxMonitor] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Hooks personnalisés
  const { isFrozen } = useSlowdown(mode === MODES.WINDOWS);
  const { money, bigExpense, addMoney, setMoney } = useMoneyDrain(
    mode === MODES.WINDOWS
  );
  const soundManager = useSoundManager();

  // Gestionnaire de popups
  const triggerCrash = useCallback(() => {
    soundManager.stopFanNoise();
    soundManager.playErrorSound();
    setMode(MODES.BLUESCREEN);
  }, [soundManager]);

  const { popups, closePopup, handleInteract } = usePopupManager(
    mode === MODES.WINDOWS,
    triggerCrash,
    soundManager.playPopupSound
  );

  // Démarrer le son du ventilateur en mode Windows
  useEffect(() => {
    if (mode === MODES.WINDOWS && hasInteracted) {
      soundManager.startFanNoise();
    }
    return () => soundManager.stopFanNoise();
  }, [mode, hasInteracted, soundManager]);

  // Ouvrir automatiquement le Task Manager après 5 secondes pour montrer les ressources
  useEffect(() => {
    if (mode === MODES.WINDOWS && hasInteracted) {
      const timeout = setTimeout(() => {
        setShowTaskManager(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [mode, hasInteracted]);

  // Licence Microsoft après 15 secondes
  useEffect(() => {
    if (mode === MODES.WINDOWS) {
      const timeout = setTimeout(() => {
        const message = bigExpense(
          7000000,
          "💳 Renouvellement licences Microsoft 365... -7 000 000 €"
        );
        setNotifications((prev) => [
          ...prev,
          { id: Date.now(), message, type: "bad" },
        ]);
        soundManager.playErrorSound();
      }, 15000);
      return () => clearTimeout(timeout);
    }
  }, [mode, bigExpense, soundManager]);

  // Économies Linux - UNE SEULE notification avec le total
  useEffect(() => {
    if (mode === MODES.LINUX) {
      // Une seule notification groupée après 3 secondes
      const totalSavings = 27500000; // Total économisé

      const timeout = setTimeout(() => {
        addMoney(totalSavings);
        setLinuxNotifications([
          {
            id: Date.now(),
            message: `🎉 Migration réussie ! Total économisé : +${totalSavings.toLocaleString(
              "fr-FR"
            )} €`,
          },
        ]);
        soundManager.playSuccessSound();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [mode, addMoney, soundManager]);

  // Démarrer la simulation depuis l'intro
  const startSimulation = useCallback(() => {
    setMode(MODES.WINDOWS);
  }, []);

  // Gestion du clic pour activer l'audio
  const handleFirstInteraction = useCallback(() => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  }, [hasInteracted]);

  // Passer à Linux
  const switchToLinux = useCallback(() => {
    setMode(MODES.TRANSITION);
  }, []);

  const completeTransition = useCallback(() => {
    setMoney(20000000); // Reset du budget initial Linux
    setMode(MODES.LINUX);
    soundManager.playSuccessSound();
    // Aller à l'ending après 20 secondes en mode Linux
    setTimeout(() => {
      setMode(MODES.ENDING);
    }, 20000);
  }, [setMoney, soundManager]);

  // Recommencer la simulation
  const restartSimulation = useCallback(() => {
    setMode(MODES.INTRO);
    setMoney(50000000);
    setNotifications([]);
    setLinuxNotifications([]);
    setShowTerminal(true);
    setShowTaskManager(false);
    setShowLinuxMonitor(false);
    setHasInteracted(false);
  }, [setMoney]);

  // Gestion des clics sur les icônes
  const handleWindowsIconClick = useCallback(
    (icon) => {
      // Ouvrir le task manager si clic sur l'icône appropriée
      if (icon.name === "Task Manager" || icon.name === "Paramètres") {
        setShowTaskManager(true);
      }
      handleInteract();
      soundManager.playPopupSound();
    },
    [handleInteract, soundManager]
  );

  return (
    <div
      className="relative w-screen h-screen overflow-hidden select-none"
      onClick={handleFirstInteraction}
    >
      {/* ============ ÉCRAN D'INTRO ============ */}
      {mode === MODES.INTRO && <IntroScreen onStart={startSimulation} />}

      {/* ============ MODE WINDOWS ============ */}
      {mode === MODES.WINDOWS && (
        <div
          className={`windows-mode w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e] ${
            isFrozen ? "pointer-events-none" : ""
          }`}
        >
          {/* Curseur laggy */}
          <LaggyMouse isEnabled={true} />

          {/* Effet de freeze */}
          {isFrozen && (
            <div className="absolute inset-0 bg-white/5 z-[9998] flex items-center justify-center">
              <div className="bg-white rounded-lg px-4 py-2 shadow-xl">
                <span className="text-gray-800 text-sm">Ne répond pas...</span>
              </div>
            </div>
          )}

          {/* Bureau */}
          <WindowsDesktop
            onIconClick={handleWindowsIconClick}
            isLagging={isFrozen}
          />

          {/* Barre des tâches */}
          <WindowsTaskbar cpuUsage={98} isResponding={!isFrozen} />

          {/* Compteur budget */}
          <div className="absolute top-4 right-4 z-40">
            <BudgetCounter amount={money} isPositive={false} />
          </div>

          {/* Notifications */}
          <div className="absolute top-28 right-4 z-40">
            <NotificationStack
              notifications={notifications}
              onDismiss={(id) =>
                setNotifications((prev) => prev.filter((n) => n.id !== id))
              }
            />
          </div>

          {/* Popups Windows */}
          {popups.map((popup) => (
            <WindowsPopup
              key={popup.id}
              {...popup}
              onClose={closePopup}
              onInteract={handleInteract}
            />
          ))}

          {/* Task Manager Windows */}
          <WindowsTaskManager
            isOpen={showTaskManager}
            onClose={() => setShowTaskManager(false)}
            onInteract={handleInteract}
          />

          {/* Moniteur système */}
          <div className="absolute bottom-16 left-4 z-40">
            <SystemMonitor
              cpuUsage={98}
              memoryUsage={87}
              diskUsage={95}
              fanSpeed="MAX"
            />
          </div>

          {/* Message d'aide */}
          {!hasInteracted && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-[10000]">
              <div className="bg-white rounded-lg p-6 text-center max-w-md mx-4">
                <h2 className="text-xl font-bold mb-2">
                  🖥️ Bienvenue dans l&apos;Enfer Windows
                </h2>
                <p className="text-gray-600 mb-4">
                  Cliquez n&apos;importe où pour commencer l&apos;expérience...
                </p>
                <p className="text-sm text-gray-400">
                  (Astuce : Essayez de fermer les popups 😈)
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============ ÉCRAN BLEU ============ */}
      {mode === MODES.BLUESCREEN && (
        <BlueScreenOfDeath onHackerReady={switchToLinux} />
      )}

      {/* ============ TRANSITION ============ */}
      {mode === MODES.TRANSITION && (
        <TransitionScreen onComplete={completeTransition} duration={3000} />
      )}

      {/* ============ MODE LINUX ============ */}
      {mode === MODES.LINUX && (
        <div className="linux-mode w-full h-full bg-gradient-to-br from-[#2d1b4e] via-[#1a1a2e] to-[#0d1117]">
          {/* Barre supérieure */}
          <LinuxTopBar />

          {/* Bureau */}
          <LinuxDesktop
            onIconClick={(icon) => {
              if (icon.name === "Terminal") setShowTerminal(true);
              if (icon.name === "System Monitor") setShowLinuxMonitor(true);
            }}
          />

          {/* Compteur budget - POSITIF */}
          <div className="absolute top-12 right-4 z-40">
            <BudgetCounter amount={money} isPositive={true} />
          </div>

          {/* Notifications positives - RÉDUITES */}
          <div className="absolute top-36 right-4 z-40">
            <NotificationStack
              notifications={linuxNotifications}
              onDismiss={(id) =>
                setLinuxNotifications((prev) => prev.filter((n) => n.id !== id))
              }
              isPositive={true}
            />
          </div>

          {/* Terminal Linux avec exemples de code */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-2xl px-4">
            <LinuxTerminal
              isOpen={showTerminal}
              onClose={() => setShowTerminal(false)}
            />
          </div>

          {/* Linux Task Manager */}
          <LinuxTaskManager
            isOpen={showLinuxMonitor}
            onClose={() => setShowLinuxMonitor(false)}
          />

          {/* Widgets d'information */}
          <div className="absolute bottom-20 left-4 right-4 z-20">
            <LinuxWidgets />
          </div>

          {/* Moniteur système sain */}
          <div className="absolute bottom-4 left-4 z-40">
            <SystemMonitor isHealthy={true} cpuUsage={12} />
          </div>

          {/* Bouton CTA */}
          <div className="absolute bottom-4 right-4 z-40">
            <a
              href="https://www.numerique.gouv.fr/publications/politique-logiciel-libre/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              📥 Télécharger le Guide NIRD
            </a>
          </div>

          {/* Mascotte Tux */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce z-10">
            🐧
          </div>
        </div>
      )}
    </div>
  );
}
