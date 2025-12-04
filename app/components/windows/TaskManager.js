"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWindows,
  FaChrome,
  FaShieldAlt,
  FaCloud,
  FaCog,
  FaSearch,
  FaMemory,
  FaMicrochip,
  FaHdd,
  FaNetworkWired,
  FaThermometerHalf,
  FaFan,
  FaGlobe,
  FaFileWord,
  FaGamepad,
  FaDesktop,
} from "react-icons/fa";
import { MdClose, MdMinimize, MdCropSquare, MdWarning } from "react-icons/md";

// Processus Windows simulés avec consommation mémoire/CPU absurde
const WINDOWS_PROCESSES = [
  {
    name: "System",
    icon: FaWindows,
    cpu: () => 15 + Math.random() * 10,
    memory: 2800,
    disk: 45,
    network: 0.1,
    status: "Running",
  },
  {
    name: "Windows Update Service",
    icon: FaWindows,
    cpu: () => 25 + Math.random() * 20,
    memory: 1200,
    disk: 100,
    network: 15.2,
    status: "Running",
  },
  {
    name: "Microsoft Edge (12)",
    icon: FaGlobe,
    cpu: () => 18 + Math.random() * 15,
    memory: 3400,
    disk: 12,
    network: 8.5,
    status: "Running",
  },
  {
    name: "Antimalware Service Executable",
    icon: FaShieldAlt,
    cpu: () => 22 + Math.random() * 25,
    memory: 890,
    disk: 80,
    network: 0.5,
    status: "Running",
  },
  {
    name: "SearchHost.exe",
    icon: FaSearch,
    cpu: () => 8 + Math.random() * 8,
    memory: 450,
    disk: 55,
    network: 0,
    status: "Running",
  },
  {
    name: "OneDrive.exe",
    icon: FaCloud,
    cpu: () => 5 + Math.random() * 10,
    memory: 380,
    disk: 35,
    network: 12.3,
    status: "Syncing",
  },
  {
    name: "Microsoft.Office.ClickToRun",
    icon: FaFileWord,
    cpu: () => 7 + Math.random() * 12,
    memory: 620,
    disk: 25,
    network: 2.1,
    status: "Running",
  },
  {
    name: "SearchIndexer.exe",
    icon: FaSearch,
    cpu: () => 12 + Math.random() * 15,
    memory: 480,
    disk: 95,
    network: 0,
    status: "Indexing",
  },
  {
    name: "RuntimeBroker.exe",
    icon: FaCog,
    cpu: () => 3 + Math.random() * 5,
    memory: 180,
    disk: 0,
    network: 0,
    status: "Running",
  },
  {
    name: "Chrome.exe (8)",
    icon: FaChrome,
    cpu: () => 15 + Math.random() * 20,
    memory: 4200,
    disk: 8,
    network: 25.6,
    status: "Running",
  },
  {
    name: "svchost.exe (netsvcs)",
    icon: FaWindows,
    cpu: () => 6 + Math.random() * 8,
    memory: 750,
    disk: 15,
    network: 5.2,
    status: "Running",
  },
  {
    name: "DiagTrack (Telemetry)",
    icon: FaWindows,
    cpu: () => 8 + Math.random() * 12,
    memory: 340,
    disk: 40,
    network: 18.9,
    status: "Sending...",
  },
  {
    name: "XboxGipSvc",
    icon: FaGamepad,
    cpu: () => 2 + Math.random() * 5,
    memory: 220,
    disk: 2,
    network: 0.3,
    status: "Running",
  },
  {
    name: "dwm.exe",
    icon: FaDesktop,
    cpu: () => 4 + Math.random() * 6,
    memory: 150,
    disk: 1,
    network: 0,
    status: "Running",
  },
];

export function WindowsTaskManager({ isOpen, onClose, onInteract }) {
  const [processes, setProcesses] = useState(
    WINDOWS_PROCESSES.map((p) => ({
      ...p,
      currentCpu: p.cpu(),
      currentMemory: p.memory + Math.random() * 200,
    }))
  );
  const [totalCpu, setTotalCpu] = useState(98);
  const [totalMemory, setTotalMemory] = useState(87);
  const [totalDisk, setTotalDisk] = useState(100);
  const [networkUsage, setNetworkUsage] = useState(45);
  const [temperature, setTemperature] = useState(78);
  const [fanSpeed, setFanSpeed] = useState(4500);
  const [activeTab, setActiveTab] = useState("processes");
  const [isHanging, setIsHanging] = useState(false);

  // Mise à jour des métriques
  useEffect(() => {
    const interval = setInterval(() => {
      // Random hang
      if (Math.random() > 0.85) {
        setIsHanging(true);
        setTimeout(() => setIsHanging(false), 1000 + Math.random() * 2000);
      }

      setProcesses((prev) =>
        prev.map((p) => ({
          ...p,
          currentCpu: p.cpu(),
          currentMemory: p.memory + Math.random() * 300 - 100,
        }))
      );

      setTotalCpu(85 + Math.random() * 15);
      setTotalMemory(80 + Math.random() * 15);
      setTotalDisk(90 + Math.random() * 10);
      setNetworkUsage(30 + Math.random() * 50);
      setTemperature(75 + Math.random() * 15);
      setFanSpeed(4000 + Math.random() * 2000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  const tabs = [
    { id: "processes", label: "Processus" },
    { id: "performance", label: "Performance" },
    { id: "services", label: "Services" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className={`absolute z-[500] bg-[#1f1f1f] rounded-lg shadow-2xl overflow-hidden border border-gray-700
          ${isHanging ? "opacity-60" : ""}`}
        style={{
          width: "720px",
          height: "520px",
          right: "20px",
          top: "60px",
        }}
        onClick={() => onInteract?.()}
      >
        {/* Title Bar - Windows 11 style */}
        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
              <FaMicrochip className="text-white text-xs" />
            </div>
            <span className="text-white text-sm">Task Manager</span>
          </div>
          <div className="flex items-center">
            <button className="text-gray-400 hover:bg-gray-600 w-10 h-8 flex items-center justify-center">
              <MdMinimize />
            </button>
            <button className="text-gray-400 hover:bg-gray-600 w-10 h-8 flex items-center justify-center">
              <MdCropSquare size={12} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose?.();
              }}
              className="text-gray-400 hover:bg-red-600 hover:text-white w-10 h-8 flex items-center justify-center transition-colors"
            >
              <MdClose />
            </button>
          </div>
        </div>

        {/* Resource Summary Bar - HIGH USAGE INDICATORS */}
        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-6 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center">
              <FaMicrochip className="text-red-400" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400">CPU</p>
              <p className="text-sm font-bold text-red-400">
                {totalCpu.toFixed(0)}%
              </p>
            </div>
            <div className="w-16 h-2 bg-gray-700 rounded overflow-hidden">
              <motion.div
                className="h-full bg-red-500"
                animate={{ width: `${totalCpu}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
              <FaMemory className="text-purple-400" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Memory</p>
              <p className="text-sm font-bold text-orange-400">
                {totalMemory.toFixed(0)}%
              </p>
            </div>
            <div className="w-16 h-2 bg-gray-700 rounded overflow-hidden">
              <motion.div
                className="h-full bg-orange-500"
                animate={{ width: `${totalMemory}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
              <FaHdd className="text-blue-400" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Disk</p>
              <p className="text-sm font-bold text-red-400">
                {totalDisk.toFixed(0)}%
              </p>
            </div>
            <div className="w-16 h-2 bg-gray-700 rounded overflow-hidden">
              <motion.div
                className="h-full bg-red-500"
                animate={{ width: `${totalDisk}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center">
              <FaNetworkWired className="text-cyan-400" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Network</p>
              <p className="text-sm font-bold text-cyan-400">
                {networkUsage.toFixed(0)} Mb/s
              </p>
            </div>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-red-900/30 border-b border-red-700 px-4 py-1 flex items-center gap-2">
          <MdWarning className="text-red-400" />
          <span className="text-xs text-red-300">
            High resource usage detected! Your PC may be slow.
          </span>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-700 bg-[#252525]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs transition-colors ${
                activeTab === tab.id
                  ? "text-white bg-[#1f1f1f] border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-2 h-[calc(100%-160px)] overflow-hidden bg-[#1f1f1f]">
          {activeTab === "processes" && (
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="grid grid-cols-6 gap-2 text-[10px] text-gray-500 pb-2 border-b border-gray-700 px-2">
                <span className="col-span-2">Name</span>
                <span className="text-right">CPU</span>
                <span className="text-right">Memory</span>
                <span className="text-right">Disk</span>
                <span className="text-right">Network</span>
              </div>

              {/* Process List */}
              <div className="flex-1 overflow-y-auto mt-1 space-y-0.5">
                {processes.map((process, idx) => {
                  const Icon = process.icon;
                  const cpuHigh = process.currentCpu > 15;
                  const memHigh = process.currentMemory > 1000;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.03 }}
                      className={`grid grid-cols-6 gap-2 text-xs py-1.5 px-2 rounded ${
                        cpuHigh || memHigh
                          ? "bg-red-900/20"
                          : "hover:bg-gray-800"
                      }`}
                    >
                      <div className="col-span-2 flex items-center gap-2 truncate">
                        <Icon
                          className={`text-xs ${
                            cpuHigh ? "text-red-400" : "text-blue-400"
                          }`}
                        />
                        <span className="text-white truncate text-[11px]">
                          {process.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <span
                          className={`font-mono text-[11px] ${
                            cpuHigh ? "text-red-400 font-bold" : "text-gray-300"
                          }`}
                        >
                          {process.currentCpu.toFixed(1)}%
                        </span>
                      </div>
                      <div className="text-right">
                        <span
                          className={`font-mono text-[11px] ${
                            memHigh
                              ? "text-orange-400 font-bold"
                              : "text-gray-300"
                          }`}
                        >
                          {Math.floor(process.currentMemory)} MB
                        </span>
                      </div>
                      <div className="text-right">
                        <span
                          className={`font-mono text-[11px] ${
                            process.disk > 50
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                        >
                          {process.disk > 0 ? `${process.disk} MB/s` : "0"}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[11px] text-gray-400">
                          {process.network > 0
                            ? `${process.network.toFixed(1)} Mb/s`
                            : "0"}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer stats */}
              <div className="border-t border-gray-700 pt-2 mt-2 flex justify-between text-[10px] text-gray-500 px-2">
                <span>Processes: {processes.length} • Threads: 2,847</span>
                <span className="text-red-400">
                  ⚠ {processes.filter((p) => p.currentCpu > 15).length} high CPU
                  processes
                </span>
              </div>
            </div>
          )}

          {activeTab === "performance" && (
            <div className="grid grid-cols-3 gap-3 h-full">
              {/* CPU Graph */}
              <div className="bg-[#171717] rounded-lg p-3 border border-gray-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400 text-xs">CPU</span>
                  <span className="text-red-400 font-bold text-lg">
                    {totalCpu.toFixed(0)}%
                  </span>
                </div>
                <div className="text-[10px] text-gray-500 mb-2">
                  Intel(R) Core(TM) i7-10750H
                </div>
                <div className="h-24 bg-[#0d0d0d] rounded border border-gray-800 relative overflow-hidden">
                  {/* Grid lines */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        className="border-r border-b border-gray-800/50"
                      />
                    ))}
                  </div>
                  {/* CPU bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 via-red-500 to-orange-400"
                    animate={{ height: `${totalCpu}%` }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Warning label */}
                  <div className="absolute top-1 left-1 bg-red-600/80 px-1 rounded">
                    <span className="text-[8px] text-white font-bold">
                      HIGH
                    </span>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-1 text-[9px]">
                  <div className="text-gray-500">Utilization</div>
                  <div className="text-right text-red-400">
                    {totalCpu.toFixed(0)}%
                  </div>
                  <div className="text-gray-500">Speed</div>
                  <div className="text-right text-gray-300">4.2 GHz</div>
                  <div className="text-gray-500">Processes</div>
                  <div className="text-right text-gray-300">287</div>
                  <div className="text-gray-500">Threads</div>
                  <div className="text-right text-gray-300">4,521</div>
                </div>
              </div>

              {/* Memory Graph */}
              <div className="bg-[#171717] rounded-lg p-3 border border-gray-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400 text-xs">Memory</span>
                  <span className="text-orange-400 font-bold text-lg">
                    {totalMemory.toFixed(0)}%
                  </span>
                </div>
                <div className="text-[10px] text-gray-500 mb-2">
                  14.2/16.0 GB (89%)
                </div>
                <div className="h-24 bg-[#0d0d0d] rounded border border-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        className="border-r border-b border-gray-800/50"
                      />
                    ))}
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 via-purple-500 to-pink-400"
                    animate={{ height: `${totalMemory}%` }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-1 left-1 bg-orange-600/80 px-1 rounded">
                    <span className="text-[8px] text-white font-bold">
                      HIGH
                    </span>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-1 text-[9px]">
                  <div className="text-gray-500">In use</div>
                  <div className="text-right text-orange-400">14.2 GB</div>
                  <div className="text-gray-500">Available</div>
                  <div className="text-right text-gray-300">1.8 GB</div>
                  <div className="text-gray-500">Committed</div>
                  <div className="text-right text-gray-300">18.4/24 GB</div>
                  <div className="text-gray-500">Cached</div>
                  <div className="text-right text-gray-300">3.2 GB</div>
                </div>
              </div>

              {/* Disk Graph */}
              <div className="bg-[#171717] rounded-lg p-3 border border-gray-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400 text-xs">Disk 0 (C:)</span>
                  <span className="text-red-400 font-bold text-lg">
                    {totalDisk.toFixed(0)}%
                  </span>
                </div>
                <div className="text-[10px] text-gray-500 mb-2">
                  Active time: {totalDisk.toFixed(0)}%
                </div>
                <div className="h-24 bg-[#0d0d0d] rounded border border-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        className="border-r border-b border-gray-800/50"
                      />
                    ))}
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 via-blue-500 to-cyan-400"
                    animate={{ height: `${totalDisk}%` }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-1 left-1 bg-red-600/80 px-1 rounded">
                    <span className="text-[8px] text-white font-bold">
                      100%
                    </span>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-1 text-[9px]">
                  <div className="text-gray-500">Read speed</div>
                  <div className="text-right text-gray-300">145 MB/s</div>
                  <div className="text-gray-500">Write speed</div>
                  <div className="text-right text-gray-300">89 MB/s</div>
                  <div className="text-gray-500">Avg response</div>
                  <div className="text-right text-red-400">847 ms</div>
                  <div className="text-gray-500">Capacity</div>
                  <div className="text-right text-gray-300">476 GB</div>
                </div>
              </div>

              {/* Temperature & Fan - spans full width */}
              <div className="col-span-3 bg-[#171717] rounded-lg p-3 border border-red-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FaThermometerHalf className="text-red-500 text-2xl" />
                  <div>
                    <p className="text-red-400 font-bold">
                      {temperature.toFixed(0)}°C
                    </p>
                    <p className="text-[10px] text-red-300">
                      ⚠️ CPU Thermal Throttling
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaFan
                    className="text-blue-400 text-2xl animate-spin"
                    style={{ animationDuration: "0.3s" }}
                  />
                  <div>
                    <p className="text-white font-bold">
                      {fanSpeed.toFixed(0)} RPM
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Fan Speed: MAXIMUM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaNetworkWired className="text-cyan-400 text-xl" />
                  <div>
                    <p className="text-cyan-400 font-bold">
                      {networkUsage.toFixed(0)} Mb/s
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Telemetry Upload Active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="text-center text-gray-400 mt-20">
              <p className="text-sm">
                ⏳ Chargement des 287 services Windows...
              </p>
              <div className="mt-4 w-32 h-2 bg-gray-700 rounded mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Hanging overlay */}
        {isHanging && (
          <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
            <div className="bg-white rounded px-3 py-2 shadow-lg">
              <p className="text-sm text-gray-800">Ne répond pas...</p>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

// Linux Task Manager - Clean & Fast
export function LinuxTaskManager({ isOpen, onClose }) {
  const [processes] = useState([
    { name: "systemd", user: "root", cpu: 0.1, memory: 12, status: "S" },
    { name: "gnome-shell", user: "user", cpu: 2.3, memory: 180, status: "S" },
    { name: "firefox", user: "user", cpu: 1.5, memory: 450, status: "S" },
    { name: "code", user: "user", cpu: 3.2, memory: 320, status: "S" },
    { name: "terminal", user: "user", cpu: 0.2, memory: 45, status: "S" },
  ]);
  const [cpuUsage] = useState(8);
  const [memoryUsage] = useState(23);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      className="absolute z-[500] bg-[#2d2d2d] rounded-lg shadow-2xl overflow-hidden"
      style={{
        width: "500px",
        height: "350px",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* GNOME-style header */}
      <div className="bg-[#3d3d3d] px-4 py-3 flex items-center justify-between">
        <span className="text-white font-medium">Moniteur système</span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10"
        >
          <MdClose />
        </button>
      </div>

      <div className="p-4">
        {/* System Overview */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-[#1a1a1a] rounded-lg p-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">CPU</span>
              <span className="text-green-400 font-bold">{cpuUsage}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded mt-2">
              <div
                className="h-full bg-green-500 rounded transition-all"
                style={{ width: `${cpuUsage}%` }}
              />
            </div>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg p-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Mémoire</span>
              <span className="text-green-400 font-bold">{memoryUsage}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded mt-2">
              <div
                className="h-full bg-green-500 rounded transition-all"
                style={{ width: `${memoryUsage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Process list */}
        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-2 text-xs text-gray-500 p-2 border-b border-gray-700">
            <span>Processus</span>
            <span className="text-right">CPU</span>
            <span className="text-right">Mém.</span>
            <span className="text-right">État</span>
          </div>
          <div className="max-h-[150px] overflow-y-auto">
            {processes.map((p, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 gap-2 text-xs p-2 hover:bg-gray-800"
              >
                <span className="text-white">{p.name}</span>
                <span className="text-right text-green-400">{p.cpu}%</span>
                <span className="text-right text-blue-400">{p.memory} MB</span>
                <span className="text-right text-gray-400">{p.status}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-3 text-center">
          ✅ Système stable • 🔇 Ventilateur silencieux • 🌡️ 42°C
        </p>
      </div>
    </motion.div>
  );
}

export default WindowsTaskManager;
