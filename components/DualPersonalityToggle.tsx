"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaJava, FaNodeJs, FaReact, FaDocker, FaCheck, FaServer, FaBolt } from "react-icons/fa6";
import { dualPersonality } from "@/data";

export default function DualPersonalityToggle() {
  const [activePersona, setActivePersona] = useState<"java" | "node">("java");

  const current = activePersona === "java" ? dualPersonality.javaStack : dualPersonality.nodeStack;

  return (
    <div className="w-full rounded-3xl border border-white/10 bg-[#070913] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting according to persona */}
      <div
        className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${
          activePersona === "java" ? "bg-orange-500/15" : "bg-cyan-500/15"
        }`}
      />

      {/* Header and Toggle Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-purple px-2.5 py-0.5 rounded-full bg-purple/10 border border-purple/20">
            Dual Engineering Personality
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
            Two Core Tech Personalities. One Developer.
          </h2>
          <p className="text-xs text-white/60 mt-0.5">
            Switch between enterprise Java systems architecture and modern Node.js/React full-stack delivery.
          </p>
        </div>

        {/* Switch Pills */}
        <div className="flex items-center p-1 rounded-2xl bg-white/[0.04] border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setActivePersona("java")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activePersona === "java"
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-lg shadow-orange-500/20"
                : "text-white/60 hover:text-white"
            }`}
          >
            <FaJava size={15} />
            <span>Java &amp; Spring Boot</span>
          </button>
          <button
            onClick={() => setActivePersona("node")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activePersona === "node"
                ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-black shadow-lg shadow-cyan-400/20"
                : "text-white/60 hover:text-white"
            }`}
          >
            <FaNodeJs size={15} />
            <span>Node.js &amp; React</span>
          </button>
        </div>
      </div>

      {/* Persona Showcase Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePersona}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6"
        >
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span
                className={`p-2 rounded-xl text-black font-bold text-sm bg-gradient-to-r ${current.accent}`}
              >
                {activePersona === "java" ? <FaServer /> : <FaBolt />}
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{current.title}</h3>
                <p className="text-xs text-white/50">{current.subtitle}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{current.description}</p>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block">
                Best For Freelance Projects:
              </span>
              <p className="text-xs text-white/90 font-medium leading-relaxed">{current.idealFor}</p>
            </div>
          </div>

          {/* Right Skills & Tech Stack Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block mb-3">
                Core Stack Arsenal
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-white/80"
                  >
                    <FaCheck
                      size={10}
                      className={activePersona === "java" ? "text-orange-400" : "text-cyan-400"}
                    />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-white/50">
              <span>Ready for client delivery</span>
              <span className="font-mono text-[11px] text-purple">Zero bloat · High throughput</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
