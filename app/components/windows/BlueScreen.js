"use client";

import { useState, useEffect } from "react";

export function BlueScreenOfDeath({ onHackerReady }) {
  const [showHacker, setShowHacker] = useState(false);
  const [hackerText, setHackerText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);

  // Animation du "progrès" qui n'avance pas vraiment
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Le progrès reste bloqué
        if (prev >= 21) return 21;
        return prev + Math.random() * 3;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Faire apparaître le hacker après un délai
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHacker(true);
      typeHackerMessage();
    }, 2000); // Plus rapide - 2 secondes au lieu de 4
    return () => clearTimeout(timeout);
  }, []);

  const typeHackerMessage = () => {
    const messages = [
      "root@gendarmerie:~$ Détection d'un système en détresse...",
      "root@gendarmerie:~$ Ne jette pas ton PC !",
      "root@gendarmerie:~$ La Gendarmerie Nationale utilise Linux depuis 2005.",
      "root@gendarmerie:~$ 37 000 postes migrés. Zéro ransomware.",
      "root@gendarmerie:~$ Économies réalisées : 2 millions €/an",
      "root@gendarmerie:~$ Veux-tu reprendre le contrôle de ta machine ?",
    ];

    let fullText = "";
    let msgIndex = 0;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (msgIndex < messages.length) {
        if (charIndex < messages[msgIndex].length) {
          fullText += messages[msgIndex][charIndex];
          setHackerText(fullText);
          charIndex++;
        } else {
          fullText += "\n";
          setHackerText(fullText);
          msgIndex++;
          charIndex = 0;

          if (msgIndex === messages.length) {
            setTimeout(() => setShowButton(true), 500);
          }
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  };

  return (
    <div className="w-full h-full bg-[#0078d7] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Contenu principal BSOD */}
      <div className="text-white text-center max-w-2xl z-10">
        <div className="text-7xl sm:text-9xl mb-6 sm:mb-8">:(</div>
        <h1 className="text-xl sm:text-2xl mb-4">
          Votre PC a rencontré un problème et doit redémarrer.
        </h1>

        <div className="bg-[#005a9e] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8 text-left font-mono text-xs sm:text-sm">
          <p className="text-yellow-300 font-bold mb-2">
            ERREUR FATALE : OBSOLESCENCE_PROGRAMMEE
          </p>
          <p className="mb-4 text-white/90">
            Votre ordinateur est parfaitement fonctionnel, mais Microsoft a
            décidé qu&apos;il était trop vieux pour Windows 11.
          </p>
          <p className="text-red-300 font-bold">
            Conséquence : Veuillez acheter un nouvel ordinateur.
          </p>
          <p className="text-gray-300 mt-2 text-xs">
            (Vous rejoindrez les 400 millions d&apos;ordinateurs jetés à la
            poubelle chaque année pour cause d&apos;&quot;incompatibilité&quot;)
          </p>
        </div>

        {/* Fausse barre de progression */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
            <span className="text-sm opacity-70">
              {Math.floor(progress)}% complété
            </span>
          </div>
          <div className="w-48 sm:w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs opacity-50 mt-2">
            Collecte de vos données personnelles pour améliorer votre expérience
            Microsoft...
          </p>
        </div>

        <p className="mt-4 text-xs opacity-40">
          Code d&apos;arrêt : MICROSOFT_PLANNED_OBSOLESCENCE_0x80070005
        </p>
      </div>

      {/* Terminal Hacker */}
      {showHacker && (
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-black/95 rounded-lg p-4 sm:p-6 border-2 border-green-500 shadow-2xl shadow-green-500/20 z-20">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="text-4xl sm:text-5xl">🐧</div>
            <div className="flex-1 overflow-hidden">
              <div className="text-green-400 font-mono text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                {hackerText}
                <span className="animate-pulse">▊</span>
              </div>

              {showButton && (
                <button
                  onClick={onHackerReady}
                  className="mt-4 bg-green-500 hover:bg-green-400 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg animate-pulse shadow-lg shadow-green-500/50 transition-all hover:scale-105"
                >
                  🐧 ESSAYER LINUX / NIRD
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* QR Code fictif */}
      <div className="absolute bottom-4 left-4 hidden sm:block">
        <div className="w-20 h-20 bg-white p-2 rounded">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMSAyMSI+PHBhdGggZD0iTTEgMWg3djdIMXptMiAyaDN2M0gzem05LTJoN3Y3aC03em0yIDJoM3YzaC0zem0tOSA5aDd2N0gxem0yIDJoM3YzSDN6Ii8+PC9zdmc+')] bg-contain" />
        </div>
      </div>
    </div>
  );
}

export default BlueScreenOfDeath;
