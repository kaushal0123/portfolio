"use client";

import Link from "next/link";
import { FaArrowRight, FaGithub, FaFilePdf, FaBriefcase, FaCode, FaTerminal, FaCheck, FaHandshake } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { personalInfo, projects, freelanceServices, technicalNotes, openSourceContributions } from "@/data";
import DualPersonalityToggle from "@/components/DualPersonalityToggle";
import CodeJudgeSimulator from "@/components/CodeJudgeSimulator";

export default function Home() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-20">
      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-8 text-center sm:text-left">
        {/* Ambient background glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-40 bg-purple/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col gap-5">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 w-fit mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/80 font-medium">
              Available for Freelance Projects &amp; Consulting
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple to-cyan-400">Full-Stack &amp; Systems</span> Engineer.
            </h1>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
              I help startups and businesses architect scalable <strong className="text-white">Java Spring Boot microservices</strong> and build fast, modern web applications with <strong className="text-white">Node.js, React, and Next.js</strong>. Open-source contributor and Codeforces Specialist delivering clean, production-ready software.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple text-black font-bold text-xs hover:bg-purple/90 transition-all shadow-lg shadow-purple/20 active:scale-95"
            >
              <FaHandshake size={14} />
              Start a Project / Hire Me
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-all active:scale-95"
            >
              View Client &amp; Open Source Work
              <FaArrowRight size={10} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-white/70 hover:text-white text-xs transition-all"
            >
              <FaFilePdf size={12} className="text-red-400" />
              Resume (PDF)
            </Link>
          </div>
        </div>

        {/* FREELANCE CREDIBILITY & SKILL STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-white/[0.08]">
          <div className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <span className="text-xs text-white/40 uppercase tracking-wider block font-mono">Dual Core Stack</span>
            <span className="text-base sm:text-lg font-bold text-white mt-1 block">Java &amp; Node.js</span>
            <span className="text-[11px] text-white/50">Spring Boot + React / Next.js</span>
          </div>

          <div className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <span className="text-xs text-white/40 uppercase tracking-wider block font-mono">Open Source</span>
            <span className="text-base sm:text-lg font-bold text-cyan-400 mt-1 block">Tooling &amp; Judges</span>
            <span className="text-[11px] text-white/50">Active GitHub Contributor</span>
          </div>

          <div className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <span className="text-xs text-white/40 uppercase tracking-wider block font-mono">Algorithmic Edge</span>
            <span className="text-base sm:text-lg font-bold text-purple mt-1 block">CF Specialist (1414)</span>
            <span className="text-[11px] text-white/50">Fast, bug-free core logic</span>
          </div>

          <div className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <span className="text-xs text-white/40 uppercase tracking-wider block font-mono">Client Delivery</span>
            <span className="text-base sm:text-lg font-bold text-emerald-400 mt-1 block">Production Ready</span>
            <span className="text-[11px] text-white/50">Docker, CI/CD, Tested APIs</span>
          </div>
        </div>
      </section>

      {/* DUAL PERSONALITY INTERACTIVE SHOWCASE */}
      <section className="space-y-4">
        <DualPersonalityToggle />
      </section>

      {/* FREELANCE SERVICES */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-wider text-purple">
            // HOW I DELIVER VALUE FOR CLIENTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Freelance Engineering Services
          </h2>
          <p className="text-xs sm:text-sm text-white/60">
            Available for end-to-end development, backend architecture, and technical consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {freelanceServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-purple/30 transition-all space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xl">{service.icon}</span>
                  <h3 className="text-base font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{service.desc}</p>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1.5">Deliverables:</span>
                <div className="flex flex-wrap gap-1.5">
                  {service.deliverables.map((d) => (
                    <span
                      key={d}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] text-white/80 border border-white/10"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE PROJECTS & CLIENT SOLUTIONS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              // CASE STUDIES &amp; REAL CODE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Client &amp; Open-Source Projects
            </h2>
          </div>
          <Link href="/projects" className="text-xs text-purple font-semibold hover:underline">
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-purple/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple/10 text-purple border border-purple/20 block w-fit mb-2">
                  {proj.projectType}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-purple transition-colors">
                  {proj.title}
                </h3>
                <p className="text-[11px] text-white/50 line-clamp-3 mt-1.5 leading-relaxed">{proj.des}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <Link href="/projects" className="text-purple font-semibold hover:underline inline-flex items-center gap-1">
                  Case Study <FaArrowRight size={9} />
                </Link>
                <div className="flex gap-1">
                  {proj.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] font-mono text-white/40 bg-white/[0.03] px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CODE EXECUTION SIMULATOR */}
      <section className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            // INTERACTIVE ARCHITECTURE PROOF
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <FaTerminal className="text-purple" size={17} />
            CodePulse Interactive Sandbox
          </h2>
          <p className="text-xs text-white/60">
            Test the live asynchronous code execution pipeline (Spring Boot + RabbitMQ + Docker container isolation).
          </p>
        </div>

        <CodeJudgeSimulator />
      </section>

      {/* OPEN SOURCE CONTRIBUTIONS BAR */}
      <section className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FaCode className="text-cyan-400" />
              Open Source Contributions &amp; Public Repositories
            </h3>
            <p className="text-xs text-white/50 mt-0.5">
              Reusable developer tooling, algorithms, and distributed systems architecture on GitHub.
            </p>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs font-medium hover:bg-white/10 transition-all w-fit"
          >
            <FaGithub size={13} />
            GitHub Profile
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {openSourceContributions.map((c) => (
            <div key={c.id} className="p-3.5 rounded-xl bg-black/40 border border-white/[0.05] space-y-1">
              <span className="text-xs font-bold text-white block">{c.title}</span>
              <p className="text-[11px] text-white/50 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FREELANCE PROJECT CALL TO ACTION */}
      <section className="p-8 sm:p-10 rounded-3xl border border-purple/30 bg-gradient-to-b from-purple/10 to-transparent text-center space-y-4 relative overflow-hidden">
        <div className="max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Have a Project in Mind?</h2>
          <p className="text-xs sm:text-sm text-white/70">
            Whether you need a full-stack MVP built fast with Node.js/React, or an enterprise-grade backend in Java Spring Boot — let&apos;s turn your vision into reality.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-purple text-black font-bold text-xs hover:bg-purple/90 transition-all shadow-lg shadow-purple/20"
          >
            Get a Free Quote / Chat
          </Link>
          <Link
            href="/resume"
            className="px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-all"
          >
            Review Official Resume
          </Link>
        </div>
      </section>
    </main>
  );
}
