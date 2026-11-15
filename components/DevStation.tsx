"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaServer, FaMicrochip, FaDatabase, FaLayerGroup, FaDocker } from "react-icons/fa6";
import { technicalSkills } from "@/data";

export default function DevStation() {
  const [activeTab, setActiveTab] = useState<"services" | "jvm" | "stack">("services");

  const services = [
    { name: "codepulse-gateway", port: ":8080", status: "Healthy", memory: "128MB", protocol: "HTTP/2, JWT" },
    { name: "eureka-discovery", port: ":8761", status: "Active", memory: "94MB", protocol: "Heartbeat 30s" },
    { name: "judge-worker-sandbox", port: ":5000", status: "Running", memory: "340MB", protocol: "RabbitMQ Consumer" },
    { name: "redis-cache-cluster", port: ":6379", status: "98.4% Hit", memory: "64MB", protocol: "In-Memory LRU" },
    { name: "postgresql-primary", port: ":5432", status: "Synced", memory: "210MB", protocol: "ACID Relational" },
  ];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#070913] p-5 md:p-6 shadow-xl relative overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <FaServer className="text-cyan-400" size={16} />
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight">Backend & Systems Workstation</h4>
            <p className="text-[11px] text-white/50">Live simulated telemetry of Kaushal&apos;s microservices stack</p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex rounded-lg bg-white/[0.04] border border-white/10 p-0.5">
          <button
            onClick={() => setActiveTab("services")}
            className={`text-xs px-3 py-1 rounded-md transition-all ${
              activeTab === "services" ? "bg-purple text-black font-semibold" : "text-white/60 hover:text-white"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab("jvm")}
            className={`text-xs px-3 py-1 rounded-md transition-all ${
              activeTab === "jvm" ? "bg-purple text-black font-semibold" : "text-white/60 hover:text-white"
            }`}
          >
            JVM & Tuning
          </button>
          <button
            onClick={() => setActiveTab("stack")}
            className={`text-xs px-3 py-1 rounded-md transition-all ${
              activeTab === "stack" ? "bg-purple text-black font-semibold" : "text-white/60 hover:text-white"
            }`}
          >
            Core Matrix
          </button>
        </div>
      </div>

      {/* Content depending on activeTab */}
      <div className="mt-4">
        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/30 transition-all font-mono"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-white truncate">{svc.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {svc.status}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-white/50">
                  <span>Port {svc.port}</span>
                  <span>RAM: {svc.memory}</span>
                </div>
                <div className="text-[10px] text-white/40 mt-1 truncate">{svc.protocol}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "jvm" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <span className="text-xs text-white/50 uppercase tracking-wider block mb-1">JVM Runtime</span>
              <p className="text-lg font-bold text-orange-400 font-mono">Java 17 LTS</p>
              <p className="text-xs text-white/60 mt-1">Garbage Collector: G1GC with low-pause tuning</p>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <span className="text-xs text-white/50 uppercase tracking-wider block mb-1">Queue Throughput</span>
              <p className="text-lg font-bold text-cyan-400 font-mono">1,450 msgs/s</p>
              <p className="text-xs text-white/60 mt-1">RabbitMQ prefetch-count=10 for fair dispatch</p>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <span className="text-xs text-white/50 uppercase tracking-wider block mb-1">Cache Hit Ratio</span>
              <p className="text-lg font-bold text-emerald-400 font-mono">98.4% Hit</p>
              <p className="text-xs text-white/60 mt-1">Redis in-memory caching with TTL auto-eviction</p>
            </div>
          </div>
        )}

        {activeTab === "stack" && (
          <div className="flex flex-wrap gap-2">
            {technicalSkills.backend.concat(technicalSkills.devopsAndInfra).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono border border-white/10 bg-white/[0.03] text-white/80 hover:border-purple/40 hover:text-purple transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
