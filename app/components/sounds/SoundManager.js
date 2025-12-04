"use client";

import { useEffect, useRef, useCallback, useState } from "react";

// URLs des sons (sons libres de droits)
export const SOUNDS = {
  fanNoise: "https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3",
  windowsError:
    "https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3",
  windowsPopup:
    "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3",
  windowsStartup:
    "https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3",
  success: "https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3",
  linuxBoot:
    "https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3",
  click: "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3",
  alert: "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3",
  notification:
    "https://assets.mixkit.co/active_storage/sfx/2867/2867-preview.mp3",
  warning: "https://assets.mixkit.co/active_storage/sfx/2870/2870-preview.mp3",
};

export function useSoundManager() {
  const audioRefs = useRef({});
  const fanRef = useRef(null);
  const [fanIntensity, setFanIntensity] = useState(0.3);

  useEffect(() => {
    // Précharger les sons
    Object.entries(SOUNDS).forEach(([key, url]) => {
      const audio = new Audio(url);
      audio.preload = "auto";
      audioRefs.current[key] = audio;
    });

    return () => {
      // Nettoyer tous les sons
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);

  const playSound = useCallback((soundName, options = {}) => {
    const audio = audioRefs.current[soundName];
    if (audio) {
      audio.volume = options.volume ?? 0.5;
      audio.loop = options.loop ?? false;
      audio.currentTime = 0;
      audio.play().catch(() => {}); // Ignorer les erreurs autoplay
      return audio;
    }
  }, []);

  const stopSound = useCallback((soundName) => {
    const audio = audioRefs.current[soundName];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, []);

  const startFanNoise = useCallback(() => {
    if (fanRef.current) {
      fanRef.current.pause();
    }
    // Ventilateur plus fort !
    fanRef.current = playSound("fanNoise", { loop: true, volume: 0.5 });

    // Augmenter progressivement le volume du ventilateur
    const intensityInterval = setInterval(() => {
      setFanIntensity((prev) => {
        const newIntensity = Math.min(prev + 0.05, 0.8);
        if (fanRef.current) {
          fanRef.current.volume = newIntensity;
        }
        return newIntensity;
      });
    }, 5000);

    return () => clearInterval(intensityInterval);
  }, [playSound]);

  const stopFanNoise = useCallback(() => {
    if (fanRef.current) {
      fanRef.current.pause();
      fanRef.current = null;
    }
    setFanIntensity(0.3);
  }, []);

  const playPopupSound = useCallback(() => {
    // Sons variés pour les popups
    const sounds = ["alert", "notification", "warning"];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    playSound(randomSound, { volume: 0.5 });
  }, [playSound]);

  const playErrorSound = useCallback(() => {
    playSound("windowsError", { volume: 0.7 });
  }, [playSound]);

  const playSuccessSound = useCallback(() => {
    playSound("success", { volume: 0.5 });
  }, [playSound]);

  return {
    playSound,
    stopSound,
    startFanNoise,
    stopFanNoise,
    playPopupSound,
    playErrorSound,
    playSuccessSound,
    fanIntensity,
  };
}

export default function SoundManager({ children, soundManager }) {
  return children;
}
