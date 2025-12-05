"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWindows,
  FaChrome,
  FaShieldAlt,
  FaCloud,
  FaSearch,
  FaFileWord,
  FaGamepad,
  FaDesktop,
  FaMicrochip,
  FaMemory,
  FaHdd,
  FaNetworkWired,
  FaServer,
  FaLeaf,
} from "react-icons/fa";
import {
  MdClose,
  MdMinimize,
  MdCropSquare,
  MdMenu,
  MdGridView,
  MdShowChart,
  MdHistory,
} from "react-icons/md";

// --- HELPERS FOR REALISM ---

// Returns the Windows Task Manager heatmap color based on usage %
const getHeatmapColor = (value, threshold1 = 20, threshold2 = 60) => {
  if (value >= 90) return "bg-[#e04f44] text-white"; // Critical Red
  if (value >= threshold2) return "bg-[#e68a45] text-white"; // High Orange
  if (value >= threshold1) return "bg-[#cca856] text-black"; // Med Yellow
  return "text-gray-200"; // Normal
};

// Generates a random path for the SVG graph
const generateGraphPath = (points, height) => {
  if (points.length === 0) return "";
  const stepX = 100 / (points.length - 1);
  let path = `M 0 ${height - (points[0] / 100) * height}`;
  points.forEach((p, i) => {
    path += ` L ${i * stepX} ${height - (p / 100) * height}`;
  });
  return path;
};

// --- DATA ---

const WINDOWS_PROCESSES = [
  {
    name: "System Interrupts",
    icon: FaMicrochip,
    baseCpu: 15,
    baseMem: 200,
    status: "Running",
    gpu: 0,
  },
  {
    name: "Antimalware Service Executable",
    icon: FaShieldAlt,
    baseCpu: 25,
    baseMem: 650,
    status: "Running",
    gpu: 12,
  },
  {
    name: "Desktop Window Manager",
    icon: FaDesktop,
    baseCpu: 8,
    baseMem: 400,
    status: "Running",
    gpu: 45,
  },
  {
    name: "Google Chrome (24)",
    icon: FaChrome,
    baseCpu: 35,
    baseMem: 3200,
    status: "Running",
    gpu: 15,
  },
  {
    name: "Windows Explorer",
    icon: FaWindows,
    baseCpu: 5,
    baseMem: 180,
    status: "Not Responding",
    gpu: 2,
  },
  {
    name: "Microsoft Teams",
    icon: FaServer,
    baseCpu: 12,
    baseMem: 890,
    status: "Running",
    gpu: 5,
  },
  {
    name: "Search Indexer",
    icon: FaSearch,
    baseCpu: 18,
    baseMem: 250,
    status: "Indexing",
    gpu: 0,
  },
  {
    name: "OneDrive",
    icon: FaCloud,
    baseCpu: 9,
    baseMem: 150,
    status: "Syncing",
    gpu: 0,
  },
  {
    name: "Registry",
    icon: FaWindows,
    baseCpu: 2,
    baseMem: 80,
    status: "Running",
    gpu: 0,
  },
  {
    name: "Service Host: NetworkService",
    icon: FaNetworkWired,
    baseCpu: 10,
    baseMem: 120,
    status: "Running",
    gpu: 0,
  },
  {
    name: "Microsoft Word",
    icon: FaFileWord,
    baseCpu: 0,
    baseMem: 450,
    status: "Suspended",
    gpu: 0,
  },
  {
    name: "Xbox Game Bar",
    icon: FaGamepad,
    baseCpu: 4,
    baseMem: 210,
    status: "Running",
    gpu: 8,
  },
];

export function WindowsTaskManager({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("processes");
  const [processes, setProcesses] = useState(WINDOWS_PROCESSES);
  const [history, setHistory] = useState(new Array(40).fill(50)); // For graph
  const [isHanging, setIsHanging] = useState(false);

  // Global Stats
  const [stats, setStats] = useState({
    cpu: 92,
    mem: 88,
    disk: 100,
    net: 45,
    gpu: 24,
  });

  // Simulation Loop
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      // 1. Update Processes with jitter
      setProcesses((prev) =>
        prev.map((p) => ({
          ...p,
          cpu: Math.max(0, Math.min(100, p.baseCpu + (Math.random() * 20 - 5))),
          mem: Math.max(0, p.baseMem + (Math.random() * 50 - 25)),
          disk: Math.random() * 15,
          net: Math.random() * 5,
        }))
      );

      // 2. Update Global Stats
      const newCpu = 85 + Math.random() * 15;
      setStats({
        cpu: newCpu,
        mem: 85 + Math.random() * 10,
        disk: 95 + Math.random() * 5,
        net: 20 + Math.random() * 30,
        gpu: 30 + Math.random() * 20,
      });

      // 3. Update Graph History
      setHistory((prev) => [...prev.slice(1), newCpu]);

      // 4. Random Freeze Effect
      if (Math.random() > 0.92) {
        setIsHanging(true);
        setTimeout(() => setIsHanging(false), 800);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="absolute z-[100] bg-[#202020] text-white/90 rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden border border-[#333] font-sans text-sm select-none"
        style={{
          width: "900px",
          height: "600px",
          top: "40%",
          left: "45%",
          transform: "translate(-50%, -50%)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* --- TITLE BAR --- */}
        <div className="h-10 flex items-center justify-between px-3 bg-[#202020]">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <FaMicrochip className="text-[10px] text-white" />
            </div>
            <span className="text-xs font-medium">Task Manager</span>
          </div>
          <div className="flex">
            <button className="w-10 h-8 flex items-center justify-center hover:bg-[#333] text-gray-400">
              <MdMinimize />
            </button>
            <button className="w-10 h-8 flex items-center justify-center hover:bg-[#333] text-gray-400">
              <MdCropSquare className="text-xs" />
            </button>
            <button
              onClick={onClose}
              className="w-10 h-8 flex items-center justify-center hover:bg-[#c42b1c] hover:text-white text-gray-400"
            >
              <MdClose />
            </button>
          </div>
        </div>

        <div className="flex h-[calc(100%-40px)]">
          {/* --- SIDEBAR (Win 11 Style) --- */}
          <div className="w-12 bg-[#202020] flex flex-col items-center py-2 gap-1 border-r border-[#333]">
            <SidebarBtn icon={MdMenu} />
            <SidebarBtn
              icon={MdGridView}
              active={activeTab === "processes"}
              onClick={() => setActiveTab("processes")}
            />
            <SidebarBtn
              icon={MdShowChart}
              active={activeTab === "performance"}
              onClick={() => setActiveTab("performance")}
            />
            <SidebarBtn icon={MdHistory} />
            <div className="flex-1" />
            <SidebarBtn icon={FaWindows} />
          </div>

          {/* --- MAIN CONTENT --- */}
          <div
            className={`flex-1 bg-[#272727] overflow-hidden flex flex-col relative ${
              isHanging ? "cursor-progress opacity-80 grayscale-[0.5]" : ""
            }`}
          >
            {/* "Not Responding" Overlay */}
            {isHanging && (
              <div className="absolute top-0 left-0 w-full h-8 bg-white/80 z-50 text-black text-xs flex items-center px-4 border-b border-blue-400">
                Task Manager (Not Responding)
              </div>
            )}

            {/* === PROCESSES TAB === */}
            {activeTab === "processes" && (
              <>
                {/* Table Header */}
                <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-px bg-[#202020] border-b border-[#333] text-[11px] text-gray-400 font-medium">
                  <HeaderCell text="Name" />
                  <HeaderCell text="Status" />
                  <HeaderCell text="CPU" active={true} />
                  <HeaderCell text="Memory" />
                  <HeaderCell text="Disk" />
                  <HeaderCell text="Network" />
                  <HeaderCell text="GPU" />
                </div>

                {/* Table Body */}
                <div className="overflow-y-auto custom-scrollbar">
                  {/* Resource Summary Row */}
                  <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-px bg-[#2d2d2d] text-xs font-semibold border-b border-[#333] sticky top-0 z-10">
                    <div className="p-2 flex items-center text-gray-300">
                      Total
                    </div>
                    <div className="p-2"></div>
                    <div className="p-2 bg-[#e04f44] text-white">
                      {stats.cpu.toFixed(0)}%
                    </div>
                    <div className="p-2 bg-[#e68a45] text-white">
                      {stats.mem.toFixed(0)}%
                    </div>
                    <div className="p-2 bg-[#e04f44] text-white">
                      {stats.disk.toFixed(0)}%
                    </div>
                    <div className="p-2 bg-[#cca856] text-black">
                      {stats.net.toFixed(0)}%
                    </div>
                    <div className="p-2 bg-[#cca856] text-black">
                      {stats.gpu.toFixed(0)}%
                    </div>
                  </div>

                  {/* Process Rows */}
                  {processes.map((p, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-px text-[11px] hover:bg-[#353535] group items-center border-b border-[#333]/50"
                    >
                      <div className="p-1.5 pl-3 flex items-center gap-2 truncate text-gray-200">
                        <span
                          onClick={() => {}}
                          className="text-gray-500 cursor-pointer"
                        >
                          {">"}
                        </span>
                        <p.icon
                          className={`text-sm ${
                            p.status === "Not Responding"
                              ? "text-red-400"
                              : "text-blue-400"
                          }`}
                        />
                        <span className="truncate">{p.name}</span>
                      </div>
                      <div
                        className={`p-1.5 truncate ${
                          p.status === "Not Responding"
                            ? "text-red-400"
                            : "text-gray-400"
                        }`}
                      >
                        {p.status}
                      </div>
                      <div
                        className={`p-1.5 text-right ${getHeatmapColor(
                          p.cpu || 0,
                          10,
                          30
                        )}`}
                      >
                        {(p.cpu || 0).toFixed(1)}%
                      </div>
                      <div
                        className={`p-1.5 text-right ${getHeatmapColor(
                          p.mem / 100,
                          20,
                          50
                        )}`}
                      >
                        {(p.mem || 0).toFixed(1)} MB
                      </div>
                      <div
                        className={`p-1.5 text-right ${getHeatmapColor(
                          p.disk,
                          5,
                          20
                        )}`}
                      >
                        {(p.disk || 0).toFixed(1)} MB/s
                      </div>
                      <div
                        className={`p-1.5 text-right ${getHeatmapColor(
                          p.net,
                          5,
                          15
                        )}`}
                      >
                        {(p.net || 0).toFixed(1)} Mbps
                      </div>
                      <div
                        className={`p-1.5 text-right ${getHeatmapColor(
                          p.gpu,
                          10,
                          40
                        )}`}
                      >
                        {(p.gpu || 0).toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* === PERFORMANCE TAB === */}
            {activeTab === "performance" && (
              <div className="flex h-full">
                {/* Left Sidebar List */}
                <div className="w-64 bg-[#202020] border-r border-[#333] flex flex-col overflow-y-auto">
                  <PerfItem
                    title="CPU"
                    label="100% Usage"
                    sub="4.20 GHz"
                    active={true}
                    color="bg-blue-500"
                  />
                  <PerfItem
                    title="Memory"
                    label="15.8/16.0 GB (99%)"
                    sub="Slots used: 2 of 4"
                    color="bg-purple-500"
                    warning
                  />
                  <PerfItem
                    title="Disk 0 (C:)"
                    label="100% Active"
                    sub="HDD"
                    color="bg-green-500"
                    warning
                  />
                  <PerfItem
                    title="Wi-Fi"
                    label="Sending..."
                    sub="IPv4"
                    color="bg-cyan-500"
                  />
                  <PerfItem
                    title="GPU 0"
                    label="35%"
                    sub="NVIDIA RTX"
                    color="bg-green-400"
                  />
                </div>

                {/* Main Graph Area */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-light">CPU</h2>
                      <p className="text-sm text-gray-400">
                        Intel(R) Core(TM) i9-12900K
                      </p>
                    </div>
                    <div className="text-right">
                      <h2 className="text-3xl font-light text-blue-400">
                        {stats.cpu.toFixed(0)}%
                      </h2>
                    </div>
                  </div>

                  {/* The Big Graph */}
                  <div className="flex-1 border border-[#444] bg-[#1a1a1a] rounded relative overflow-hidden p-2">
                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-5 pointer-events-none">
                      {[...Array(50)].map((_, i) => (
                        <div
                          key={i}
                          className="border-r border-b border-[#333]/30"
                        />
                      ))}
                    </div>
                    <svg className="w-full h-full" preserveAspectRatio="none">
                      <path
                        d={generateGraphPath(history, 100)} // This needs to scale to actual container in real impl, but simplified here
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      />
                      <path
                        d={`${generateGraphPath(history, 100)} V 100 H 0 Z`}
                        fill="rgba(59,130,246,0.1)"
                        stroke="none"
                      />
                    </svg>
                  </div>

                  {/* Bottom Stats */}
                  <div className="grid grid-cols-4 gap-4 mt-6 text-xs">
                    <StatBox
                      label="Utilization"
                      value={`${stats.cpu.toFixed(0)}%`}
                    />
                    <StatBox label="Speed" value="4.81 GHz" />
                    <StatBox label="Processes" value="342" />
                    <StatBox label="Threads" value="5621" />
                    <StatBox label="Handles" value="128453" />
                    <StatBox label="Up time" value="0:04:21:12" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// --- SUB-COMPONENTS ---

function SidebarBtn({ icon: Icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors mb-1 ${
        active ? "bg-[#333] text-blue-400" : "text-gray-400 hover:bg-[#333]"
      }`}
    >
      <Icon className="text-lg" />
    </button>
  );
}

function HeaderCell({ text, active }) {
  return (
    <div
      className={`p-2 pl-3 flex items-center hover:bg-[#333] cursor-pointer ${
        active ? "bg-[#2d2d2d]" : ""
      }`}
    >
      {text}
    </div>
  );
}

function PerfItem({ title, label, sub, active, color, warning }) {
  return (
    <div
      className={`p-4 border-b border-[#333] hover:bg-[#333] cursor-pointer border-l-4 ${
        active ? "bg-[#2d2d2d] border-l-blue-400" : "border-l-transparent"
      }`}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold">{title}</span>
        {warning && (
          <span className="text-red-400 text-[10px] font-bold">HIGH</span>
        )}
      </div>
      <div className="flex gap-2 h-10">
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-sm font-light">{label}</span>
          <span className="text-xs text-gray-500">{sub}</span>
        </div>
        {/* Mini Graph */}
        <div className="w-16 h-full border border-[#444] bg-[#101010] relative">
          <div
            className={`absolute bottom-0 left-0 w-full ${color} opacity-40`}
            style={{ height: active ? "90%" : "40%" }}
          ></div>
          <div
            className={`absolute bottom-0 left-0 w-full border-t-2 ${color.replace(
              "bg-",
              "border-"
            )}`}
            style={{ height: active ? "90%" : "40%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div>
      <div className="text-gray-500 mb-0.5">{label}</div>
      <div className="text-base font-light">{value}</div>
    </div>
  );
}

// --- LINUX VERSION (Clean, GNOME Style) ---

export function LinuxTaskManager({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute z-[100] bg-[#333333] text-white rounded-xl shadow-2xl overflow-hidden font-sans border border-black/50"
      style={{
        width: "500px",
        height: "400px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Header (GNOME Style) */}
      <div className="bg-[#2d2d2d] px-4 py-3 flex justify-between items-center border-b border-black/20">
        <span className="font-bold tracking-wide text-sm">System Monitor</span>
        <div className="flex gap-2">
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400" />
          <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400" />
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"
          />
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#404040] rounded-lg p-4 border border-white/5">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">
              CPU History
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-light text-green-400">4%</span>
              <div className="flex-1 h-8 bg-black/20 rounded overflow-hidden flex items-end">
                <div className="w-full h-[4%] bg-green-400/50 border-t border-green-400"></div>
              </div>
            </div>
          </div>
          <div className="bg-[#404040] rounded-lg p-4 border border-white/5">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">
              Memory
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-light text-purple-400">
                1.2<span className="text-sm">GB</span>
              </span>
              <div className="flex-1 h-8 bg-black/20 rounded overflow-hidden flex items-end">
                <div className="w-full h-[15%] bg-purple-400/50 border-t border-purple-400"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-white/5">
          <div className="grid grid-cols-4 p-2 text-xs font-bold text-gray-500 bg-[#252525] border-b border-white/5">
            <span>Process Name</span>
            <span className="text-right">CPU</span>
            <span className="text-right">Mem</span>
            <span className="text-right">ID</span>
          </div>
          <div className="text-sm">
            {[
              { n: "gnome-shell", c: "1.2%", m: "145 MB", id: "1042" },
              { n: "Xorg", c: "0.8%", m: "89 MB", id: "892" },
              { n: "firefox", c: "0.5%", m: "210 MB", id: "2145" },
              { n: "systemd", c: "0.1%", m: "12 MB", id: "1" },
              { n: "terminal", c: "0.0%", m: "24 MB", id: "3412" },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 p-2 border-b border-white/5 hover:bg-white/5"
              >
                <span className="truncate">{row.n}</span>
                <span className="text-right text-gray-400">{row.c}</span>
                <span className="text-right text-gray-400">{row.m}</span>
                <span className="text-right text-gray-600">{row.id}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <FaLeaf className="text-green-500" />
            <span>Eco-friendly Mode</span>
          </div>
          <span>Load average: 0.12, 0.08, 0.04</span>
        </div>
      </div>
    </motion.div>
  );
}

export default WindowsTaskManager;
