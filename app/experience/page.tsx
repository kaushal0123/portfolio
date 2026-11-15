"use client";

import { FaBriefcase, FaGraduationCap, FaCode, FaCheck, FaNodeJs, FaJava, FaHandshake } from "react-icons/fa6";
import { workExperience, freelanceServices, technicalSkills, education, openSourceContributions } from "@/data";

export default function ExperiencePage() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 font-mono">
          <span>// SERVICES &amp; PROFESSIONAL BACKGROUND</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Freelance Services &amp; Experience
        </h1>
        <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
          Delivering high-performance backend systems and modern full-stack web applications for clients, with hands-on software engineering internship experience.
        </p>
      </div>

      {/* FREELANCE CAPABILITIES / SERVICES */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-white/[0.08]">
          <FaHandshake className="text-purple" size={17} />
          <h2 className="text-lg font-bold text-white tracking-tight">What I Offer to Clients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {freelanceServices.map((srv) => (
            <div key={srv.id} className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{srv.icon}</span>
                <h3 className="text-sm font-bold text-white">{srv.title}</h3>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">{srv.desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {srv.deliverables.map((d) => (
                  <span key={d} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-purple border border-purple/20">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK & CLIENT HISTORY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-white/[0.08]">
          <FaBriefcase className="text-cyan-400" size={16} />
          <h2 className="text-lg font-bold text-white tracking-tight">Engineering Experience</h2>
        </div>

        <div className="space-y-6">
          {workExperience.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#080a14] space-y-4 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple/20 text-purple border border-purple/30">
                      {exp.badge}
                    </span>
                  </div>
                  <p className="text-sm text-purple font-medium mt-0.5">
                    {exp.company} <span className="text-white/40">· {exp.location}</span>
                  </p>
                </div>
                <span className="text-xs font-mono text-white/50 bg-white/[0.03] px-3 py-1 rounded-full border border-white/10 w-fit">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{exp.desc}</p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-white/40 block">Key Responsibilities &amp; Impact:</span>
                <ul className="space-y-2">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-white/70 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                {exp.skills.map((s) => (
                  <span key={s} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-white/70 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DUAL TECH STACK BREAKDOWN */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-white/[0.08]">
          <FaCode className="text-emerald-400" size={16} />
          <h2 className="text-lg font-bold text-white tracking-tight">Dual Tech Stack Breakdown</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Java & Spring Boot */}
          <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-3">
            <span className="text-xs font-mono uppercase text-orange-400 font-bold block flex items-center gap-1.5">
              <FaJava /> Java &amp; Spring Boot Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {technicalSkills.backend.map((b) => (
                <span key={b} className="px-2.5 py-1 rounded-md text-xs font-mono bg-orange-500/10 text-orange-300 border border-orange-500/20">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Node.js & React */}
          <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-3">
            <span className="text-xs font-mono uppercase text-cyan-400 font-bold block flex items-center gap-1.5">
              <FaNodeJs /> Node.js &amp; React Full-Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {technicalSkills.frontend.concat(["Node.js", "Express.js", "REST APIs"]).map((f) => (
                <span key={f} className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Queues */}
          <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-3">
            <span className="text-xs font-mono uppercase text-purple font-bold block">
              Queues, Cache &amp; Docker
            </span>
            <div className="flex flex-wrap gap-1.5">
              {technicalSkills.devopsAndInfra.concat(technicalSkills.databasesAndCaching).map((d) => (
                <span key={d} className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple/10 text-purple border border-purple/20">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-white/[0.08]">
          <FaGraduationCap className="text-orange-400" size={16} />
          <h2 className="text-lg font-bold text-white tracking-tight">Academic Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu) => (
            <div key={edu.id} className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] space-y-2">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                <span className="text-xs font-mono text-white/40">{edu.period}</span>
              </div>
              <p className="text-xs font-medium text-orange-400">{edu.institution} · {edu.location}</p>
              <p className="text-xs text-white/80 font-mono pt-1">{edu.score}</p>
              <p className="text-xs text-white/50 leading-relaxed pt-1">{edu.highlights}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
