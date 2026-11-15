"use client";

import { useState } from "react";
import { FaGithub, FaLocationArrow, FaServer, FaRobot, FaCircleCheck, FaDocker, FaLayerGroup, FaNodeJs, FaJava } from "react-icons/fa6";
import { projects } from "@/data";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "backend" | "fullstack" | "ai">("all");

  const filtered = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-12">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 border border-purple/20 text-xs text-purple font-mono">
          <span>// CLIENT SOLUTIONS &amp; OPEN-SOURCE TOOLING</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Client Projects &amp; Systems Architecture
        </h1>
        <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
          Production systems engineered for clients and open source: scalable microservices with Java Spring Boot, full-stack web applications with Node.js and React, and automated AI review agents.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            { id: "all", label: "All Projects" },
            { id: "backend", label: "Java Spring Boot" },
            { id: "fullstack", label: "Node.js & React Full-Stack" },
            { id: "ai", label: "AI & Developer Tooling" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-purple text-black font-semibold shadow-md shadow-purple/20"
                  : "bg-white/[0.04] border border-white/10 text-white/70 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Deep Dive Cards */}
      <div className="space-y-10">
        {filtered.map((proj) => (
          <article
            key={proj.id}
            className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#080a14] space-y-7 relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-purple">
                    {proj.category === "backend" ? <FaJava size={15} /> : proj.category === "fullstack" ? <FaNodeJs size={15} /> : <FaRobot size={15} />}
                  </span>
                  <span className="text-xs font-mono uppercase text-purple font-semibold">{proj.projectType}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{proj.title}</h2>
                <p className="text-xs text-white/50 mt-0.5">{proj.tagline}</p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs font-medium hover:bg-white/10 transition-all"
                >
                  <FaGithub size={13} />
                  GitHub Repository
                </a>
                <a
                  href={proj.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple text-black text-xs font-bold hover:bg-purple/90 transition-all shadow-md shadow-purple/20"
                >
                  Live Demo
                  <FaLocationArrow size={10} />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl">{proj.des}</p>

            {/* Performance & Architecture Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              {proj.metrics.map((m) => (
                <div key={m.label} className="space-y-0.5">
                  <span className="text-[11px] text-white/40 block">{m.label}</span>
                  <span className="text-xs font-mono font-bold text-white">{m.value}</span>
                </div>
              ))}
            </div>

            {/* System Architecture Flow Diagram / Breakdown */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white/50 flex items-center gap-2">
                <FaLayerGroup size={12} className="text-purple" />
                Technical Architecture Highlights
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                {Object.entries(proj.architecture).map(([key, val]) => (
                  <div
                    key={key}
                    className="p-3.5 rounded-xl border border-white/[0.05] bg-black/40 flex flex-col gap-1"
                  >
                    <span className="text-purple font-semibold text-[11px] uppercase tracking-wide">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="text-white/70 leading-relaxed text-[11px] font-sans">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Highlights */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white/50 flex items-center gap-2">
                <FaCircleCheck size={12} className="text-emerald-400" />
                Deliverables &amp; Outcomes
              </h3>

              <ul className="space-y-2">
                {proj.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-white/70 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple mt-1.5 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] border border-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
