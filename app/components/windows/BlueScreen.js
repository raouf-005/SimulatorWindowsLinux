"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BlueScreenOfDeath({ onHackerReady }) {
  const [showHacker, setShowHacker] = useState(false);
  const [hackerText, setHackerText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);
  const [glitch, setGlitch] = useState(false);

  // Simulation of stuck progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 21) return 21; // Stuck at 21%
        return prev + Math.random() * 3;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  // Trigger Hacker Sequence
  useEffect(() => {
    const timeout = setTimeout(() => {
      setGlitch(true); // Trigger screen glitch before terminal appears
      setTimeout(() => {
        setShowHacker(true);
        setGlitch(false);
        typeHackerMessage();
      }, 400);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const typeHackerMessage = () => {
    const messages = [
      "root@rescue-sys:~$ CONNECTION ESTABLISHED.",
      "root@rescue-sys:~$ ANALYZING SYSTEM FAILURE...",
      "> ERROR: PLANNED_OBSOLESCENCE DETECTED.",
      "> HARDWARE STATUS: HEALTHY.",
      "> OS STATUS: CRITICAL BLOATWARE.",
      "root@rescue-sys:~$ INITIALIZING LINUX KERNEL...",
      "root@rescue-sys:~$ GENDARMERIE_PROTOCOL_V2.0 ACTIVATED.",
      "root@rescue-sys:~$ SAVING 2 MILLION EUROS/YEAR...",
      "root@rescue-sys:~$ READY FOR USER INPUT.",
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
            setTimeout(() => setShowButton(true), 200);
          }
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 5);

    return () => clearInterval(typeInterval);
  };

  return (
    <div className="relative w-full h-full bg-[#0078D7] font-sans overflow-hidden select-none cursor-wait">
      {/* --- CRT MONITOR OVERLAY EFFECTS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[size:100%_2px,3px_100%] pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)] z-40 pointer-events-none" />

      {/* --- GLITCH WRAPPER --- */}
      <motion.div
        className="w-full h-full flex flex-col items-start p-8 sm:p-20 pt-16 sm:pt-32"
        animate={
          glitch
            ? {
                x: [-5, 5, -5, 5, 0],
                filter: [
                  "hue-rotate(0deg)",
                  "hue-rotate(90deg)",
                  "hue-rotate(0deg)",
                ],
              }
            : {}
        }
        transition={{ duration: 0.2 }}
      >
        {/* Sad Face */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-[8rem] sm:text-[10rem] leading-none font-light mb-8 font-mono"
        >
          :(
        </motion.div>

        {/* Error Text */}
        <div className="text-white max-w-4xl space-y-6">
          <h1 className="text-xl sm:text-3xl font-light">
            Votre ordinateur a rencontré un problème et doit redémarrer. Nous
            collectons simplement des informations relatives aux erreurs, puis
            nous redémarrerons l&apos;ordinateur pour vous.
          </h1>

          <div className="flex items-center gap-4 text-xl sm:text-2xl mt-8">
            <span className="font-light">
              {Math.floor(progress)}% effectués
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-8 mt-12 pt-8">
            {/* QR Code Style */}
            <div className="bg-white p-2 w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
              <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LinuxIsBetter')] bg-cover rendering-pixelated" />
            </div>

            <div className="text-sm sm:text-base font-light space-y-2 opacity-90">
              <p>
                Pour plus d&apos;informations sur ce problème et les solutions
                possibles, consultez https://www.windows.com/stopcode
              </p>
              <br />
              <p>
                Si vous contactez l&apos;assistance, transmettez ces
                informations :
              </p>
              <p className="font-mono text-xs sm:text-sm mt-2">
                Code d&apos;arrêt :{" "}
                <span className="font-bold">CRITICAL_PLANNED_OBSOLESCENCE</span>
              </p>
              <p className="font-mono text-xs sm:text-sm">
                Éléments ayant échoué :{" "}
                <span className="font-bold">
                  win32k.sys (Too Old For Windows 11)
                </span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- HACKER / LINUX INTERVENTION --- */}
      <AnimatePresence>
        {showHacker && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="absolute bottom-0 left-0 right-0 sm:bottom-12 sm:left-12 sm:right-12 z-50 flex justify-center items-end sm:items-center pointer-events-auto"
          >
            {/* Terminal Window */}
            <div className="w-full max-w-3xl bg-[#0c0c0c]/95 backdrop-blur-xl rounded-t-xl sm:rounded-xl border border-green-500/30 shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
              {/* Terminal Header */}
              <div className="bg-white/10 px-4 py-2 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-gray-400 text-xs font-mono uppercase tracking-widest">
                  Rescue_Shell_v1.0.4
                </div>
                <div className="w-10" /> {/* Spacer for centering */}
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm sm:text-base min-h-[300px] flex flex-col relative">
                {/* Background Grid inside terminal */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                <div className="relative z-10 text-green-400 whitespace-pre-line leading-relaxed shadow-green-400/10 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">
                  {hackerText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2.5 h-5 bg-green-400 ml-1 align-middle"
                  />
                </div>

                {/* Action Button */}
                {showButton && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-auto pt-6 flex justify-center w-full z-20"
                  >
                    <button
                      onClick={onHackerReady}
                      className="group relative px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold font-mono rounded-md transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
                    >
                      <span className="flex items-center gap-2">
                        <span>🚀</span>
                        <span>INITIALIZE_NIRD_PROTOCOL</span>
                      </span>
                      {/* Button Glitch Effect */}
                      <div className="absolute inset-0 bg-white/20 skew-x-12 opacity-0 group-hover:animate-ping" />
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BlueScreenOfDeath;
